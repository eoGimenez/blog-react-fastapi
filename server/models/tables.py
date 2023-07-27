from config.database import Base
from sqlalchemy import Column
from sqlalchemy.sql.sqltypes import Integer, String, DateTime


class DbPost(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)
    image_url = Column(String)
    author = Column(String)
    timestamp = Column(DateTime)
