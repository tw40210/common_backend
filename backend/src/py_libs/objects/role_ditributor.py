import random
from time import time
class RoleDistributor:
    def __init__(self, num_role):
        self.roles=random.sample(range(1, num_role+1), num_role)
        self.hash_tag=hash(time())
    def get_role(self):
        if len(self.roles)>0:
            return (self.roles.pop(), self.hash_tag)
        else:
            return (None, self.hash_tag)


if __name__ == '__main__':
    role = RoleDistributor(5)
    for i in range(5):
        print(role.get_role())