from sqlalchemy.orm.session import Session
from schemas.post import PostBase
from models.tables import DbPost
from datetime import datetime


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
