from fastapi import APIRouter, BackgroundTasks
import src
from typing import Dict, Any
from src.py_libs.objects.role_ditributor import RoleDistributor


router = APIRouter()


@router.post("/createRole")
def create_role(role: dict):
    print(role)
    return {"CreatedRole": role}

@router.get("/randomRole/getRole")
def get_role():
    if src.role_distributor is None:
        return {"status": "Not set yet"
                }
    else:
        role, hash_tag = src.role_distributor.get_role()
        if role is None:
            return {"status": "No more role to get"
                    }

        return {"role": role,
                "hash_tag": hash_tag

                }

@router.get("/randomRole/resetRole/{num}")
def reset_role(num: int):
    src.role_distributor=RoleDistributor(num)
    return {"hash_tag": src.role_distributor.hash_tag
            }

@router.get("/getRole/{idx}")
def fetch_plot(idx: int):
    print("fetch_plot: ", idx)
    return {"isReady": True
            }

# @router.post("/run_backgroundTasks")
# def run_backgroundTasks(backgroundTasks: BackgroundTasks, req: Dict[Any, Any]=None):
#     print("send: ", req)
#     backgroundTasks.add_task(roleGameCotroller.collectCommand, req)
#
#     return {"status": "200"}
