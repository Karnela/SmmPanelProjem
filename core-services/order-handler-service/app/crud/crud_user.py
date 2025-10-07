from sqlalchemy.orm import Session
from infrastructure.database.models import Kullanici
from schemas.user_schemas import UserCreateSchema

def get_user_by_username(db: Session, username: str):
    return db.query(Kullanici).filter(Kullanici.kullanici_adi == username).first()

def get_user_by_email(db: Session, email: str):
    return db.query(Kullanici).filter(Kullanici.eposta == email).first()

def create_user(db: Session, user: UserCreateSchema, hashed_password: str):
    db_user = Kullanici(
        kullanici_adi=user.username,
        eposta=user.email,
        sifre=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

