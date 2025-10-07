from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Numeric, Boolean
from sqlalchemy.orm import relationship
from . import Base
import datetime

class Ortaklik(Base):
    __tablename__ = 'ortakliklar'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), unique=True, nullable=False)
    referans_kodu = Column(String, unique=True, nullable=False, index=True)
    kazanc_orani = Column(Numeric(5, 2), default=5.0)
    aktif = Column(Boolean, default=True)
    
    kullanici = relationship("Kullanici", back_populates="ortaklik_bilgisi")

class OrtaklikReferansi(Base):
    __tablename__ = 'ortaklik_referanslari'
    davet_eden_k_id = Column(Integer, ForeignKey('kullanicilar.id'), primary_key=True)
    davet_edilen_k_id = Column(Integer, ForeignKey('kullanicilar.id'), primary_key=True, unique=True)
    kayit_tarihi = Column(DateTime, default=datetime.datetime.utcnow)

    davet_eden_kullanici = relationship("Kullanici", foreign_keys=[davet_eden_k_id], back_populates="yapilan_davetler")
    davet_edilen_kullanici = relationship("Kullanici", foreign_keys=[davet_edilen_k_id], back_populates="davet_eden_referans")

class OrtaklikKazanci(Base):
    __tablename__ = 'ortaklik_kazanclari'
    id = Column(Integer, primary_key=True)
    ortaklik_id = Column(Integer, ForeignKey('ortakliklar.id'), nullable=False)
    kazanc_getiren_k_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    odeme_id = Column(Integer, ForeignKey('odemeler.id'), nullable=False)
    kazanc_miktari = Column(Numeric(10, 2), nullable=False)
    tarih = Column(DateTime, default=datetime.datetime.utcnow)

    ortak = relationship("Ortaklik")
    kazanc_getiren_kullanici = relationship("Kullanici", foreign_keys=[kazanc_getiren_k_id])
    odeme = relationship("Odeme")

from .user_models import Kullanici
from .payment_models import Odeme

