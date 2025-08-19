from pydantic import BaseModel, EmailStr

class AboutMe(BaseModel):
    name: str
    role: str
    about: str
    email: EmailStr
    github: str
    linkedin: str
