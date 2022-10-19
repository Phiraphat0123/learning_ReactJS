from typing import Union
import requests
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()
res= requests.get('http://localhost:9000/trips')
data=res.json()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def filter(keyword):
    updatedData=[]
    for x in data:
        if keyword in x['title']:
            updatedData.append(x)
        elif keyword in x['description']:
            updatedData.append(x)
        elif keyword in x['tags']:
            updatedData.append(x)
    return updatedData

@app.get("/api/trips/search")
def read_root(keyword:str):
    return filter(keyword)

@app.get("/api/trips")
def read_root():
    return data

