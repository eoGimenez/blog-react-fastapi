from typing import List
from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm.session import Session
from schemas.post import PostBase, PostDisplay
from config import db_post
from config.database import get_db
import string
import shutil
import random

router = APIRouter(
    prefix=('/post'),
    tags=['posts']
)


@router.get('/', response_model=List[PostDisplay])
def get_posts(db: Session = Depends(get_db)):
    return db_post.get_all_posts(db)


@router.post('/', response_model=PostDisplay)
def create_post(request: PostBase, db: Session = Depends(get_db)):
    return db_post.new_post(db, request)


@router.delete('/{id}')
def delete_post(id: int, db: Session = Depends(get_db)):
    return db_post.delete_post(id, db)


@router.put('/')
def update_post(id: int, request: PostBase, db: Session = Depends(get_db)):
    return db_post.update_post_by_id(id, request, db)


@router.post('/image')
def upload_image(image: UploadFile = File(...)):
    letter = string.ascii_letters
    random_str = ''.join(random.choice(letter) for i in range(6))
    new = f'_{random_str}'
    filename = new.join(image.filename.rsplit('.', 1))
    path = f'images/{filename}'

    with open(path, 'w+b') as buffer:
        shutil.copyfileobj(image.file, buffer)

    return {'filename': path}
