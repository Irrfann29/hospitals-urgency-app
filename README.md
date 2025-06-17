# hospitals-urgency-app
# 🏥 Hospital Resource Request System

A prototype of an app to help hospitals request urgent medical resources like blood, oxygen, ICU beds, etc., and collaborate in real-time.

## 🔧 Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** FastAPI
- **Database:** In-memory (can be upgraded to MongoDB)

---

## 🚀 How to Run Locally

### 1. Clone the repo

git clone https://github.com/Irrfann29/hospitals-urgency-app.git
cd hospitals-urgency-app

### 2. Frontend Setup (React)
cd frontend
npm install
npm start

### 3. Backend Setup (FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

### API Routes

POST /requests → Submit a new emergency request

GET /requests → Get all emergency requests

📦 Folder Structure

frontend/  → React UI

backend/   → FastAPI server


