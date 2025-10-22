from pymongo import MongoClient
from dotenv import load_dotenv
import os
from gridfs import GridFS

load_dotenv()  

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client['PortFolio']

fs = GridFS(db, collection="certificates")