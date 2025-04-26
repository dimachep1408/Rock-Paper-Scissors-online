import json
from channels.generic.websocket import AsyncWebsocketConsumer

class BlueTeamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def receive(self, text_data):
        text_data_content = json.loads(text_data)["item"]
        print(text_data_content)

class RedTeamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def receive(self, text_data):
        text_data_content = json.loads(text_data)["item"]
        print(text_data_content)