from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session
from schemas.post import PostBase, PostDisplay
from config import db_post
from config.database import get_db

router = APIRouter(
    prefix=('/post'),
    tags=['posts']
)


@router.post('/', response_model=PostDisplay)
def create_post(request: PostBase, db: Session = Depends(get_db)):
    return db_post.new_post(db, request)


@router.get('/', response_model=List[PostDisplay])
def get_posts(db: Session = Depends(get_db)):
    return db_post.get_all_posts(db)
