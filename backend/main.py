from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Any, List
import os
from bson import ObjectId
from models import AboutMe
from config import db

from fastapi.middleware.cors import CORSMiddleware

def serialize_doc(doc: dict) -> dict:
    """Convert MongoDB document into JSON serializable dict."""
    if not doc:
        return {}
    doc = dict(doc)
    if "_id" in doc and isinstance(doc["_id"], ObjectId):
        doc["_id"] = str(doc["_id"])
    return doc

def serialize_docs(docs: List[dict]) -> List[dict]:
    """Convert list of MongoDB documents."""
    return [serialize_doc(doc) for doc in docs]

app = FastAPI()

# Allow all origins (for local dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- API ROUTES ----------

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Portfolio API!"}

@app.get("/profile")
def get_profile():
    """Fetch single profile from DB."""
    profile = db.AboutMe.find_one({}, {"_id": 0})
    if profile:
        profile = serialize_doc(profile)
        return profile
    return {"error": "Profile not found"}

    

@app.get("/skills")
def get_skills():
    """Fetch skills data."""
    skill = db.skills.find({}, {"_id": 0})
    skills_data = serialize_docs(skill)
    if not skills_data:
        return {"error": "Skills not found"}
    return skills_data

@app.get("/projects")
def get_projects():
    """Fetch projects data."""
    projects = db.projects.find({}, {"_id": 0})
    projects_data = serialize_docs(projects)
    if not projects_data:
        return {"error": "Projects not found"}
    return projects_data

@app.get("/resume/download")
async def download_resume():
    resume_path = os.path.join("static", "resume.pdf")
    if os.path.exists(resume_path):
        return FileResponse(resume_path, media_type="application/pdf", filename="resume.pdf")
    return {"error": "Resume not found"}


