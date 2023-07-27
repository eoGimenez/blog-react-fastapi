from fastapi import FastAPI
from config.database import Base, engine
from routers import post

app = FastAPI()

app.include_router(post.router)

Base.metadata.create_all(engine)
