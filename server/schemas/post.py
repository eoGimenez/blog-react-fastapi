from pydantic import BaseModel
from datetime import datetime


class PostBase(BaseModel):
    title: str
    content: str
    image_url: str
    author: str


class PostDisplay(BaseModel):
    id: int
    title: str
    content: str
    image_url: str
    author: str
    timestamp: datetime

    class Config():
        from_attributes = True
