from fastapi import FastAPI
from config.database import Base, engine
from routers import post
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.include_router(post.router)

Base.metadata.create_all(engine)

app.mount('/images', StaticFiles(directory='images'), name='images')
