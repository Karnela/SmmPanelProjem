from fastapi import APIRouter
router = APIRouter()

@router.get("/dashboard")
def view_admin_dashboard():
    # Burası admin paneli verilerini döndürecek
    return {"message": "Admin paneline hoş geldiniz"}