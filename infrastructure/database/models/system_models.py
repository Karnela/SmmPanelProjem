from sqlalchemy import Column, Integer, String, DateTime, Text, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .user_models import Base, Kullanici
import datetime

class SistemAyar(Base):
    __tablename__ = 'sistem_ayarlari'
    id = Column(Integer, primary_key=True)
    ayar_adi = Column(String, unique=True, nullable=False)
    ayar_degeri = Column(Text, nullable=False)

class Bildirim(Base):
    __tablename__ = 'bildirimler'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=True) 
    baslik = Column(String, nullable=False)
    mesaj = Column(Text, nullable=False)
    okundu = Column(Boolean, default=False)
    olusturma_tarihi = Column(DateTime, default=datetime.datetime.utcnow)

    kullanici = relationship("Kullanici")

class AdminLog(Base):
    __tablename__ = 'admin_loglari'
    id = Column(Integer, primary_key=True)
    admin_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    islem = Column(String, nullable=False) 
    aciklama = Column(Text)
    tarih = Column(DateTime, default=datetime.datetime.utcnow)
    ip_adresi = Column(String)

    admin = relationship("Kullanici")