from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, Enum, Numeric
from sqlalchemy.orm import relationship
from .user_models import Base, Kullanici
import datetime
import enum

class SiparisDurumu(enum.Enum):
    BEKLIYOR = "Bekliyor"
    ISLEME_ALINDI = "İşleme Alındı"
    TAMAMLANDI = "Tamamlandı"
    IPTAL_EDILDI = "İptal Edildi"
    KISMEN_TAMAMLANDI = "Kısmen Tamamlandı"

class Kategori(Base):
    __tablename__ = 'kategoriler'
    id = Column(Integer, primary_key=True)
    ad = Column(String, nullable=False)
    servisler = relationship("Servis", back_populates="kategori", cascade="all, delete-orphan")

class Servis(Base):
    __tablename__ = 'servisler'
    id = Column(Integer, primary_key=True)
    ad = Column(String, nullable=False)
    aciklama = Column(Text)
    fiyat = Column(Numeric(10, 2), nullable=False)
    kategori_id = Column(Integer, ForeignKey('kategoriler.id'), nullable=False)
    kategori = relationship("Kategori", back_populates="servisler")
    min_siparis = Column(Integer, default=1)
    max_siparis = Column(Integer, default=1000)

class Siparis(Base):
    __tablename__ = 'siparisler'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    servis_id = Column(Integer, ForeignKey('servisler.id'), nullable=False)
    link = Column(String, nullable=False)
    miktar = Column(Integer, nullable=False)
    tutar = Column(Numeric(10, 2), nullable=False)
    durum = Column(Enum(SiparisDurumu), default=SiparisDurumu.BEKLIYOR)
    olusturma_tarihi = Column(DateTime, default=datetime.datetime.utcnow)
    kullanici = relationship("Kullanici")
    servis = relationship("Servis")