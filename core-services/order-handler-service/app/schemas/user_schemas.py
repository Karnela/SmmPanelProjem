from pydantic import BaseModel, EmailStr
import datetime

class TokenSchema(BaseModel):
    access_token: str
    token_type: str

class UserCreateSchema(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserSchema(BaseModel):
    id: int
    kullanici_adi: str
    eposta: EmailStr
    kayit_tarihi: datetime.datetime
    bakiye: int

    class Config:
        from_attributes = True

