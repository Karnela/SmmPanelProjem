from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.session import get_db
from schemas.user_schemas import UserCreateSchema, UserSchema
from crud import crud_user
from core.security import get_password_hash

router = APIRouter()

@router.post("/", response_model=UserSchema)
def create_user(user: UserCreateSchema, db: Session = Depends(get_db)):
    """
    Yeni bir kullanıcı oluşturur.
    """
    db_user_by_username = crud_user.get_user_by_username(db, username=user.username)
    if db_user_by_username:
        raise HTTPException(status_code=400, detail="Bu kullanıcı adı zaten alınmış.")

    db_user_by_email = crud_user.get_user_by_email(db, email=user.email)
    if db_user_by_email:
        raise HTTPException(status_code=400, detail="Bu e-posta adresi zaten kullanılıyor.")

    hashed_password = get_password_hash(user.password)
    
    return crud_user.create_user(db=db, user=user, hashed_password=hashed_password)


@router.get("/me")
def read_users_me():
    # Burası mevcut kullanıcı bilgilerini döndürecek
    return {"username": "mevcut_kullanici"}

