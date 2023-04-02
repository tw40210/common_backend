from fastapi import APIRouter, BackgroundTasks

from typing import Dict, Any
from ..py_libs.controllers.RoleGameController import RoleGameController

# from ..py_libs.objects.RoleGameControl import RoleGameController
import time
import asyncio

import logging
router = APIRouter()


@router.post("/createRole")
def create_role(role: dict):
    print(role)
    return {"CreatedRole": role}

@router.get("/fetchPlot/{idx}")
def fetch_plot(idx: int):
    print("fetch_plot: ", idx)
    return {"isReady": True
            }

@router.post("/run_backgroundTasks")
def run_backgroundTasks(backgroundTasks: BackgroundTasks, req: Dict[Any, Any]=None):
    print("send: ", req)
    backgroundTasks.add_task(roleGameCotroller.collectCommand, req)

    return {"status": "200"}
