from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Interval, Enum
from sqlalchemy.orm import relationship
from .user_models import Base, Kullanici
from .order_models import Servis, Siparis
import datetime
import enum

class AbonelikDurumu(enum.Enum):
    AKTIF = "Aktif"
    DURAKLATILDI = "Duraklatıldı"
    IPTAL_EDILDI = "İptal Edildi"
    TAMAMLANDI = "Tamamlandı"

class Abonelik(Base):
    __tablename__ = 'abonelikler'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    servis_id = Column(Integer, ForeignKey('servisler.id'), nullable=False)
    kullanici_adi_veya_link = Column(String, nullable=False)
    miktar = Column(Integer, nullable=False)
    gonderim_sayisi = Column(Integer, nullable=False)
    kalan_gonderim = Column(Integer, nullable=False)
    zaman_araligi = Column(Interval, nullable=False)

    durum = Column(Enum(AbonelikDurumu), default=AbonelikDurumu.AKTIF)
  
    baslangic_tarihi = Column(DateTime, default=datetime.datetime.utcnow)
    sonraki_gonderim_tarihi = Column(DateTime)
    
    kullanici = relationship("Kullanici")
    servis = relationship("Servis")
    gecmis_siparisler = relationship("AbonelikSiparisi", back_populates="abonelik")

class AbonelikSiparisi(Base):
    __tablename__ = 'abonelik_siparisleri'
    id = Column(Integer, primary_key=True)
    abonelik_id = Column(Integer, ForeignKey('abonelikler.id'), nullable=False)
    siparis_id = Column(Integer, ForeignKey('siparisler.id'), nullable=False)
    olusturma_tarihi = Column(DateTime, default=datetime.datetime.utcnow)

    abonelik = relationship("Abonelik", back_populates="gecmis_siparisler")
    siparis = relationship("Siparis")