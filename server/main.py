from fastapi import FastAPI
from config.database import Base, engine
from routers import post
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

origin = [
    'http://localhost:3000'
]

app = FastAPI()

app.include_router(post.router)

Base.metadata.create_all(engine)

app.mount('/images', StaticFiles(directory='images'), name='images')

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)
