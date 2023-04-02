# def getChatGPTResponse(command):
#     return 'Chat: '+str(command)

from ..chat.chat import getChatGPTResponse
from ..objects.prompts import general_prompt, eng_prompt, chi_prompt, TRPG_D2D_prompt, chi_intro, eng_intro



prompt_dict={
    'CHINESE':(chi_prompt, chi_intro),
    'ENGLISH':(eng_prompt, eng_intro),
}

class RoleGameController:
    def __init__(self) -> None:
        self.RoleList=[]

    
    def createRole(self, role) -> None:
        self.RoleList.append(role)

