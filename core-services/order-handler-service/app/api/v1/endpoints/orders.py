from fastapi import APIRouter
router = APIRouter()

@router.get("/")
def list_orders():
    # Burası gelecekte siparişleri listeleyecek kodla doldurulacak
    return {"message": "Siparişler burada listelenecek"}