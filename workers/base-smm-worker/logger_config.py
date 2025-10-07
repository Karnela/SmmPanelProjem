import logging

GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'
RESET = '\033[0m'

class CustomFormatter(logging.Formatter):
    """Renkli ve Türkçe log formatlayıcı"""

    FORMATS = {
        logging.INFO: f"{GREEN}BAŞARILI{RESET}: %(message)s",
        logging.WARNING: f"{YELLOW}UYARI{RESET}: %(message)s",
        logging.ERROR: f"{RED}HATA{RESET}: %(message)s",
    }

    def format(self, record):
        log_fmt = self.FORMATS.get(record.levelno)
        formatter = logging.Formatter(log_fmt)
        return formatter.format(record)

def get_logger(name):
    """Yapılandırılmış logger'ı döndürür"""
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    ch = logging.StreamHandler()
    ch.setFormatter(CustomFormatter())
    
    if not logger.handlers:
        logger.addHandler(ch)
        
    return logger