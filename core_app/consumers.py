import json
from channels.generic.websocket import AsyncWebsocketConsumer


players = {
    "blue": [],
    "red": []
}

class BlueTeamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        players["blue"].append("user")
        print(players)
        await self.accept()

    async def websocket_disconnect(self, message):
        players["blue"].pop()
        print(players)

    async def receive(self, text_data):
        text_data_content = json.loads(text_data)
        print(text_data_content["item"],"\n", "team:", text_data_content["team"])

class RedTeamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        players["red"].append("user")
        print(players)
        await self.accept()

    async def websocket_disconnect(self, message):
        players["red"].pop()
        print(players)


    async def receive(self, text_data):
        text_data_content = json.loads(text_data)
        print(text_data_content["item"], "\n", "team:", text_data_content["team"])