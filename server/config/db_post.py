from sqlalchemy.orm.session import Session
from schemas.post import PostBase, PostDisplay
from models.tables import DbPost
from datetime import datetime
from fastapi import HTTPException, status


def new_post(db: Session, request: PostBase):
    new_post = DbPost(
        title=request.title,
        content=request.content,
        image_url=request.image_url,
        author=request.author,
        timestamp=datetime.now()
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


def get_all_posts(db: Session):
    return db.query(DbPost).all()


def delete_post(id: int, db: Session):
    post = db.query(DbPost).filter(DbPost.id == id).first()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"No hay ningun post con la id {id}")
    db.delete(post)
    db.commit()
    return 'El post fue eliminado de la base de datos'


def update_post_by_id(id: int, request: PostBase, db: Session):
    post = db.query(DbPost).filter(DbPost.id == id)
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"No hay ningun post con la id {id}")
    post.update({
        DbPost.title: request.title,
        DbPost.content: request.content,
        DbPost.image_url: request.image_url,
        DbPost.author: request.author
    })
    db.commit()
    return 'Updated'
