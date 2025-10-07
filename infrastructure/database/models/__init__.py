from sqlalchemy.ext.declarative import declarative_base

# Tüm modellerin kullanacağı tek bir Base
Base = declarative_base()

# Modelleri import et
from .user_models import Kullanici, Rol, KullaniciApiKey, KullaniciRolleri
from .order_models import Kategori, Servis, Siparis, SiparisDurumu
from .payment_models import Odeme, BakiyeGecmisi
from .subscription_models import Abonelik, AbonelikSiparisi, AbonelikDurumu
from .affiliate_models import Ortaklik, OrtaklikReferansi, OrtaklikKazanci
from .system_models import SistemAyar, Bildirim, AdminLog

# Alembic'in ve uygulamanın tüm modelleri görmesi için
__all__ = [
    'Base',
    'Kullanici', 'Rol', 'KullaniciApiKey', 'KullaniciRolleri',
    'Kategori', 'Servis', 'Siparis', 'SiparisDurumu',
    'Odeme', 'BakiyeGecmisi',
    'Abonelik', 'AbonelikSiparisi', 'AbonelikDurumu',
    'Ortaklik', 'OrtaklikReferansi', 'OrtaklikKazanci',
    'SistemAyar', 'Bildirim', 'AdminLog'
]

