from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid

app = FastAPI()

# CORS settings to allow frontend (Vite runs on localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for now (no DB)
hospital_requests = []

class HospitalRequest(BaseModel):
    id: str
    hospital: str
    resource: str
    quantity: int
    urgency: str
    contact: str

@app.get("/requests")
def get_requests():
    return hospital_requests

@app.post("/requests")
def add_request(req: HospitalRequest):
    hospital_requests.append(req.dict())
    return {"message": "Request added successfully", "data": req.dict()}

@app.delete("/requests/{request_id}")
def delete_request(request_id: str):
    global hospital_requests
    hospital_requests = [req for req in hospital_requests if req["id"] != request_id]
    return {"message": "Request deleted"}

@app.delete("/requests")
def delete_all_requests():
    hospital_requests.clear()
    return {"message": "All requests cleared"}
