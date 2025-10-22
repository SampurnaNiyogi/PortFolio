from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Any, List
import os
from bson import ObjectId
from config import db, fs
from gridfs import GridFS
from io import BytesIO
from starlette.responses import StreamingResponse
from pdf2image import convert_from_bytes
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
    """View resume inline in browser."""
    resume_path = os.path.join("static", "resume.pdf")
    if os.path.exists(resume_path):
        return FileResponse(
            resume_path,
            media_type="application/pdf",
            headers={"Content-Disposition": "inline; filename=resume.pdf"}
        )
    return {"error": "Resume not found"}

@app.get("/resume/view")
async def view_resume():
    """Force download of resume."""
    resume_path = os.path.join("static", "resume.pdf")
    if os.path.exists(resume_path):
        return FileResponse(
            resume_path,
            media_type="application/pdf",
            headers={"Content-Disposition": "attachment; filename=resume.pdf"}
        )
    return {"error": "Resume not found"}

@app.get("/education")
def get_education():
    """Fetch education data."""
    education = db.education.find({}, {"_id": 0})
    education_data = serialize_docs(education)
    if not education_data:
        return {"error": "Education details not found"}
    return education_data

@app.get("/certifications")
def get_certifications():
    """Fetch all certificate file details."""
    certificates_list = []
    for cert in fs.find():
        certificates_list.append({
            "id": str(cert._id),
            "filename": cert.filename,
            "contentType": cert.contentType,
            # Convert the datetime object to a standard string format
            "uploadDate": cert.upload_date.isoformat() 
        })
    return certificates_list

@app.get("/certificate/{file_id}")
def get_certificate_file(file_id: str):
    """Downloads a certificate file from GridFS by its ID."""
    try:
        # Convert the string ID from the URL to a MongoDB ObjectId
        grid_id = ObjectId(file_id)
    except Exception:
        return {"error": "Invalid file ID format"}

    try:
        # Get the file-like object from GridFS
        grid_out = fs.get(grid_id)
        
        # Use StreamingResponse to efficiently send the file's content
        return StreamingResponse(
            BytesIO(grid_out.read()),
            media_type=grid_out.contentType
        )
    except Exception:
        # This handles cases where the file_id is valid but not found in GridFS
        return {"error": "Certificate not found"}
    
@app.get("/certificate/{file_id}/image")
def get_certificate_as_image(file_id: str):
    """
    Fetches a PDF from GridFS, converts its first page to a JPEG image,
    and streams it back.
    """
    try:
        grid_id = ObjectId(file_id)
    except Exception:
        return {"error": "Invalid file ID format"}

    try:
        grid_out = fs.get(grid_id)
        
        # Convert the first page of the PDF bytes to a list of images
        images = convert_from_bytes(grid_out.read(), first_page=1, last_page=1)

        if images:
            # Save the first page image to a byte buffer
            img_buffer = BytesIO()
            images[0].save(img_buffer, format='JPEG')
            img_buffer.seek(0) # Rewind the buffer to the beginning

            # Stream the image content
            return StreamingResponse(img_buffer, media_type="image/jpeg")

    except Exception as e:
        print(e) # For debugging
        return {"error": "Certificate not found or conversion failed"}


@app.get("/certificate/{file_id}/image")
def get_certificate_as_image(file_id: str):
    """
    Fetches a PDF from GridFS, converts its first page to a JPEG image,
    and streams it back.
    """
    try:
        grid_id = ObjectId(file_id)
    except Exception:
        return {"error": "Invalid file ID format"}

    try:
        grid_out = fs.get(grid_id)
        
        # Convert the first page of the PDF bytes to a list of images
        images = convert_from_bytes(grid_out.read(), first_page=1, last_page=1)

        if images:
            # Save the first page image to a byte buffer
            img_buffer = BytesIO()
            images[0].save(img_buffer, format='JPEG')
            img_buffer.seek(0) # Rewind the buffer to the beginning

            # Stream the image content
            return StreamingResponse(img_buffer, media_type="image/jpeg")

    except Exception as e:
        print(e) # For debugging
        return {"error": "Certificate not found or conversion failed"}


@app.get("/hobbies")
def get_hobbies():
    """Fetch hobbies data."""
    hobbies = db.hobbies.find({}, {"_id": 0})
    hobbies_data = serialize_docs(hobbies)
    if not hobbies_data:
        return {"error": "Hobbies not found"}
    return hobbies_data