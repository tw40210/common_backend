from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from .routers import common_router


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    common_router.router,
    prefix="/common",
    tags=["common"],
    responses={404: {"description": "Not found"}},
)

if __name__ == '__main__':
    uvicorn.run("src.main:app", port=5000, host="0.0.0.0", log_level="info")