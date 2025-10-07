from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Numeric
from sqlalchemy.orm import relationship
from .user_models import Base, Kullanici
import datetime

class Odeme(Base):
    __tablename__ = 'odemeler'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    miktar = Column(Numeric(10, 2), nullable=False)
    odeme_yontemi = Column(String, nullable=False)
    islem_tarihi = Column(DateTime, default=datetime.datetime.utcnow)
    durum = Column(String, default='Tamamlandı')
    kullanici = relationship("Kullanici")

class BakiyeGecmisi(Base):
    __tablename__ = 'bakiye_gecmisi'
    id = Column(Integer, primary_key=True)
    kullanici_id = Column(Integer, ForeignKey('kullanicilar.id'), nullable=False)
    islem_tipi = Column(String) # Bakiye Ekleme, Sipariş Harcaması vb.
    miktar = Column(Numeric(10, 2), nullable=False)
    onceki_bakiye = Column(Numeric(10, 2), nullable=False)
    sonraki_bakiye = Column(Numeric(10, 2), nullable=False)
    tarih = Column(DateTime, default=datetime.datetime.utcnow)
    aciklama = Column(String)
    kullanici = relationship("Kullanici")