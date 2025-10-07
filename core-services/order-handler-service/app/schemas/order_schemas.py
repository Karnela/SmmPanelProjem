from pydantic import BaseModel
from decimal import Decimal

class OrderCreateSchema(BaseModel):
    servis_id: int
    link: str
    miktar: int

class OrderSchema(BaseModel):
    id: int
    servis_id: int
    link: str
    miktar: int
    tutar: Decimal
    durum: str

    class Config:
        orm_mode = True