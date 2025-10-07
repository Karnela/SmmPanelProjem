from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from . import Base 
import datetime

class Rol(Base):
    __tablename__ = 'roller'
    id = Column(Integer, primary_key=True)
    rol_adi = Column(String, unique=True, nullable=False)
    kullanicilar = relationship("Kullanici", secondary="kullanici_rolleri", back_populates="roller")

class Kullanici(Base):
    __tablename__ = 'kullanicilar'
    id = Column(Integer, primary_key=True)
    kullanici_adi = Column(String(50), unique=True, nullable=False, index=True)
    sifre = Column(String, nullable=False)
    eposta = Column(String(120), unique=True, nullable=False, index=True)
    bakiye = Column(Integer, default=0)
    kayit_tarihi = Column(DateTime, default=datetime.datetime.utcnow)
    son_giris_tarihi = Column(DateTime)
    is_active = Column(Boolean, default=True)
    is_staff = Column(Boolean, default=False)
    
    roller = relationship("Rol", secondary="kullanici_rolleri", back_populates="kullanicilar")
    api_anahtarlari = relationship("KullaniciApiKey", back_populates="kullanici", cascade="all, delete-orphan")
    
    ortaklik_bilgisi = relationship("Ortaklik", uselist=False, back_populates="kullanici")
    yapilan_davetler = relationship("OrtaklikReferansi", foreign_keys="OrtaklikReferansi.davet_eden_k_id", back_populates="davet_eden_kullanici")
    davet_eden_referans = relationship("OrtaklikReferansi", foreign_keys="OrtaklikReferansi.davet_edilen_k_id", back_populates="davet_edilen_kullanici", uselist=False)

class KullaniciApiKey(Base):
    __tablename__ = 'kullanici_api_anahtarlari'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    api_anahtari = Column(String, unique=True, nullable=False, index=True)
    olusturma_tarihi = Column(DateTime, default=datetime.datetime.utcnow)
    son_kullanim_tarihi = Column(DateTime)
    aktif = Column(Boolean, default=True)
    kullanici = relationship("Kullanici", back_populates="api_anahtarlari")

class KullaniciRolleri(Base):
    __tablename__ = 'kullanici_rolleri'
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), primary_key=True)
    rol_id = Column(Integer, ForeignKey('roller.id'), primary_key=True)

from .affiliate_models import Ortaklik, OrtaklikReferansi

