function translate(word) {
  const lang = window.siteSettings.lang;
  const translations = {
    'tr': {
      'adet': 'adet',
      'ortalama': 'Ort.',
      'secili': 'Seçili',
      'servis': 'Servis',
      'ucreti': 'Ücreti',
      'tamamlama': 'Tamamlama',
      'suresi': 'Süresi',
      'aciklama': 'Açıklama',
      'min': 'Min',
      'max': 'Maks',
      'notfound': 'Eşleşen servis bulunamadı.',
      'notdescription': 'Açıklama yoktur.',
      'guaranteed': 'Garantili',
      'recommended': 'Önerilen',
      'faster': 'Hızlı',
      'canceled': 'İptal Edilebilir',
      'timed': 'Süreli',
      'discounted': 'İndirim',
      'slow': 'Yavaş',
      'order': 'Sipariş',
      'payment': 'Ödeme',
      'other': 'Diğer',
      'orderMessage': 'ID ye sahip sipariş için'
    },
    'ru': {
      'adet': 'штука',
      'ortalama': 'Cр.',
      'secili': 'выбрано',
      'servis': 'служба',
      'ucreti': 'стоимость',
      'tamamlama': 'завершения',
      'suresi': 'время',
      'aciklama': 'описание',
      'min': 'мин.',
      'max': 'макс.',
      'notfound': 'Подходящая служба не найдена.',
      'notdescription': 'Описание отсутствует.',
      'guaranteed': 'Гарантированный',
      'recommended': 'Рекомендуемый',
      'faster': 'Быстрый',
      'canceled': 'Отмененный',
      'timed': 'С таймером',
      'discounted': 'Со скидкой',
      'slow': 'Медленный',
      'order': 'Заказ',
      'payment': 'Оплата',
      'other': 'Другой',
      'orderMessage': 'Для заказа с ID'
    },
    'en': {
      'adet': 'Piece',
      'ortalama': 'Avg.',
      'secili': 'Selected',
      'servis': 'Service',
      'ucreti': 'Fee',
      'tamamlama': 'Completion',
      'suresi': 'Time',
      'aciklama': 'Description',
      'min': 'Min',
      'max': 'Max',
      'notfound': 'No matching service found.',
      'notdescription': 'No Description Available.',
      'guaranteed': 'Guaranteed',
      'recommended': 'Recommended',
      'faster': 'Fast',
      'canceled': 'Canceled',
      'timed': 'Timed',
      'discounted': 'Discounted',
      'slow': 'Slow',
      'order': 'Order',
      'payment': 'Payment',
      'other': 'Other',
      'orderMessage': 'For order with ID'
    },
    'bp': {
      'adet': 'Peça',
      'ortalama': 'Média',
      'secili': 'Selecionado',
      'servis': 'Serviço',
      'ucreti': 'Taxa',
      'tamamlama': 'Conclusão',
      'suresi': 'Tempo',
      'aciklama': 'Descrição',
      'min': 'Mín',
      'max': 'Máx',
      'notfound': 'Nenhum serviço correspondente encontrado.',
      'notdescription': 'Descrição não disponível.',
      'guaranteed': 'Garantido',
      'recommended': 'Recomendado',
      'faster': 'Rápido',
      'canceled': 'Cancelado',
      'timed': 'Temporizado',
      'discounted': 'Com Desconto',
      'slow': 'Lento',
      'order': 'Ordem',
      'payment': 'Pagamento',
      'other': 'Outro',
      'orderMessage': 'Para pedido com ID'
    },
    'ar': {
      'adet': 'عدد',
      'ortalama': 'متوسط',
      'secili': 'مُحدَد',
      'servis': 'خدمة',
      'ucreti': 'السعر',
      'tamamlama': 'اكتمال',
      'suresi': 'الوقت',
      'aciklama': 'وصف',
      'min': 'الحد الأدنى',
      'max': 'الحد الأقصى',
      'notfound': 'لم يتم العثور على خدمة مطابقة.',
      'notdescription': 'لا يوجد وصف.',
      'guaranteed': 'مضمون',
      'recommended': 'موصى به',
      'faster': 'أسرع',
      'canceled': 'قابل للإلغاء',
      'timed': 'محدد الوقت',
      'discounted': 'خصم',
      'slow': 'بطيء',
      'order': 'طلب',
      'payment': 'الدفع',
      'other': 'آخر',
      'orderMessage': 'للطلب برقم التعريف الشخصي'
    },
    'zh': {
      'adet': '数量',
      'ortalama': '平均',
      'secili': '选中',
      'servis': '服务',
      'ucreti': '费用',
      'tamamlama': '完成',
      'suresi': '时间',
      'aciklama': '说明',
      'min': '最小',
      'max': '最大',
      'notfound': '未找到匹配的服务。',
      'notdescription': '没有说明。',
      'guaranteed': '保证',
      'recommended': '推荐',
      'faster': '快速',
      'canceled': '可取消',
      'timed': '定时',
      'discounted': '折扣',
      'slow': '慢',
      'order': '订单',
      'payment': '支付',
      'other': '其他',
      'orderMessage': '订单ID'
    },

    'de': {
      'adet': 'Anzahl',
      'ortalama': 'Durchschn.',
      'secili': 'Ausgewählt',
      'servis': 'Dienst',
      'ucreti': 'Gebühr',
      'tamamlama': 'Abschluss',
      'suresi': 'Dauer',
      'aciklama': 'Beschreibung',
      'min': 'Min',
      'max': 'Max',
      'notfound': 'Kein passender Dienst gefunden.',
      'notdescription': 'Keine Beschreibung vorhanden.',
      'guaranteed': 'Garantiert',
      'recommended': 'Empfohlen',
      'faster': 'Schneller',
      'canceled': 'Stornierbar',
      'timed': 'Zeitlich',
      'discounted': 'Rabatt',
      'slow': 'Langsam',
      'order': 'Bestellung',
      'payment': 'Zahlung',
      'other': 'Andere',
      'orderMessage': 'Für Bestellung mit ID'
    },

    'es': {
      'adet': 'cantidad',
      'ortalama': 'Prom.',
      'secili': 'Seleccionado',
      'servis': 'Servicio',
      'ucreti': 'Costo',
      'tamamlama': 'Finalización',
      'suresi': 'Duración',
      'aciklama': 'Descripción',
      'min': 'Mín',
      'max': 'Máx',
      'notfound': 'No se encontró un servicio coincidente.',
      'notdescription': 'No hay descripción.',
      'guaranteed': 'Garantizado',
      'recommended': 'Recomendado',
      'faster': 'Rápido',
      'canceled': 'Cancelable',
      'timed': 'Con tiempo',
      'discounted': 'Descuento',
      'slow': 'Lento',
      'order': 'Pedido',
      'payment': 'Pago',
      'other': 'Otro',
      'orderMessage': 'Para pedido con ID'
    },

    'ko': {
      'adet': '수량',
      'ortalama': '평균',
      'secili': '선택된',
      'servis': '서비스',
      'ucreti': '요금',
      'tamamlama': '완료',
      'suresi': '기간',
      'aciklama': '설명',
      'min': '최소',
      'max': '최대',
      'notfound': '일치하는 서비스를 찾을 수 없습니다.',
      'notdescription': '설명이 없습니다.',
      'guaranteed': '보장된',
      'recommended': '추천',
      'faster': '빠른',
      'canceled': '취소 가능',
      'timed': '시간제한',
      'discounted': '할인',
      'slow': '느린',
      'order': '주문',
      'payment': '결제',
      'other': '기타',
      'orderMessage': 'ID가 있는 주문에 대해'
    }

  };

  const effectiveLang = translations[lang] ? lang : 'en';
  return translations[effectiveLang][word] ? translations[effectiveLang][word] : word;
}

var pathname = window.location.pathname;

$(document).ready(function() {
  const api = window.siteSettings.domain
  const baseUrl = "https://panel.fsksoft.com/masterv3-api";

  function fetchApiData(type, callback) {
    $.ajax({
      type: "GET",
      url: `${baseUrl}?type=${type}&url=${api}`,
      dataType: "json",
      data: {
        apikey: api
      },
      success: callback
    });
  }
  fetchApiData('notify', function(data) {
    const announcements = data.reverse();
    announcements.forEach(announcement => {
      const {
        duyuru_title,
        duyuru_content,
        duyuru_date,
        duyuru_status
      } = announcement;
      $("#notify-list").append(`<div class="announcements-item">
                <div class="announcements-item-top">
                    <span class="announcements-title">${duyuru_title}</span>
                    <span class="announcements-content">${duyuru_content}</span>
                </div>
                <div class="announcements-bottom">
                    <span class="announcements-date">${duyuru_date}</span>
                    <span class="announcements-stats">${duyuru_status}</span>
                </div>
            </div>`);
    });
  });
  fetchApiData('popup', function(data) {
    data.forEach(popup => {
      const {
        popup_durum,
        popup_baslik,
        popup_aciklama,
        popup_view,
        popup_resim,
        button_durum,
        button_yazi,
        button_link,
        popup_closetime,
        site_error
      } = popup;
      if (popup_durum === "aktif") {
        showPopup(popup_baslik, popup_aciklama, popup_resim, button_durum, button_yazi, button_link, Number(popup_view), Number(popup_closetime));
      }
      $("body").append(site_error);
    });
  });

  function showPopup(title, description, imageUrl, buttonStatus, buttonText, buttonLink, viewTime, closeTime) {
    const popupCloseTimeInSeconds = closeTime / 1000 + 2.3;
    const popupViewTime = viewTime;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const popupLastOpened = Number(localStorage.getItem("popupacilis"));

    let shouldShowPopup = !popupLastOpened || popupLastOpened + popupViewTime < currentTimeInSeconds;
    if (shouldShowPopup) {
      localStorage.setItem("popupacilis", currentTimeInSeconds);
      setTimeout(() => {
        openPopup(title, description, imageUrl, buttonStatus, buttonText, buttonLink, popupCloseTimeInSeconds);
      }, 2000);
    }
  }

  function openPopup(title, description, imageUrl, buttonStatus, buttonText, buttonLink, closeTime) {
    $("#popupbaslik").html(title);
    $("#popupsistemi").append(`<div class='popupaciklama'>${description}</div>${imageUrl ? `<img class="popupimg" src="${imageUrl}">` : ''}`);
    if (buttonStatus === "aktif") {
      $("#popupbutton").html(`<a href="${buttonLink}" class="btn btn-main btn-sm btn-block">${buttonText}</a>`);
    } else {
      $("#popupbutton").html('');
    }
    document.getElementById("popupModal").classList.remove("disable");
    setTimeout(() => {
      document.getElementById("popupModal").classList.add("disable");
    }, closeTimeout * 1000);
  }
});

$(document).ready(function() {
  $('.all-dropdown').select2({
    minimumResultsForSearch: Infinity
  });
});

function filterCategory(e) {
  "all" == e ? $("[data-filter-table-category-id]").removeClass("hidden") : ($("[data-filter-table-category-id]").addClass("hidden"), $("[data-filter-table-category-id=" + e + "]").removeClass("hidden"))
}

function SService(e) {
  $("#search-service").val(e), $(".select-service").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(e.toLowerCase()) > -1)
  })
}
$(document).ready(function() {
  $("#search-service").on("keyup", function() {
    var e = $(this).val().toLowerCase();
    $(".select-service").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(e.toLowerCase()) > -1)
    })
  })
});

const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar-content');

function toggleSidebar() {
  sidebar.classList.toggle('active');
  sidebarContent.classList.toggle('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarContent.classList.remove('active');
}

const themeButtons = {
  dark: document.querySelector(".dark-btn"),
  light: document.querySelector(".light-btn"),
  auto: document.querySelector(".auto-btn")
};
const htmlElement = document.getElementsByTagName("HTML")[0];

function changeTheme(theme) {
  localStorage.lightMode = theme;
  htmlElement.setAttribute("class", theme === 'auto' ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light') : theme);
  Object.values(themeButtons).forEach(button => button.classList.remove("active"));
  themeButtons[theme].classList.add("active");
}

function changeToAutoTheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = isDarkMode ? 'dark' : 'light';
  localStorage.lightMode = 'auto';
  htmlElement.setAttribute("class", theme);
  Object.values(themeButtons).forEach(button => button.classList.remove("active"));
  themeButtons['auto'].classList.add("active");
}

function selectInitialTheme() {
  const savedTheme = localStorage.getItem("lightMode") || default_theme;
  if (savedTheme === 'auto') {
    changeToAutoTheme();
  } else {
    changeTheme(savedTheme);
  }
}

themeButtons.dark.addEventListener('click', () => changeTheme('dark'));
themeButtons.light.addEventListener('click', () => changeTheme('light'));
themeButtons.auto.addEventListener('click', changeToAutoTheme);

selectInitialTheme();


function openModalID(id) {
  document.getElementById(id).classList.remove("disable")
}

function closeModalID(id) {
  document.getElementById(id).classList.add("disable")
}

const balanceBox = document.querySelector('.balance-box');
const currencyList = document.querySelector('.currency-list');
const currencyBg = document.querySelector('.currency-bg');

function openCurrencyBox() {
  currencyList.classList.toggle('active');
  currencyBg.classList.toggle('active');
  balanceBox.classList.toggle('active');
}

function closeCurrencyBox() {
  currencyList.classList.remove('active');
  currencyBg.classList.remove('active');
  balanceBox.classList.remove('active');
}

const sidebarMenu = document.querySelector('.sidebar-top');
const sidebarScroll = document.querySelector('.sidebar-scroll');
const sidebarBottom = document.querySelector('.sidebar-bottom');


function handleScroll() {
  const isNearBottom = sidebarMenu.scrollHeight - sidebarMenu.scrollTop <= sidebarMenu.clientHeight + 10;
  if (isNearBottom) {
    sidebarBottom.classList.add('active');
    sidebarScroll.classList.remove('active');
  } else {
    sidebarBottom.classList.remove('active');
    sidebarScroll.classList.add('active');
  }
}

sidebarMenu.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleScroll);

function sidebarScrollBottom() {
  $('.sidebar-top').animate({
    scrollTop: $('.sidebar-top')[0].scrollHeight
  }, 1000);
}


document.addEventListener("DOMContentLoaded", function() {
  const currencyBoxes = document.querySelectorAll('.currency-box');
  const itemsPerPage = 12;
  const totalPages = Math.ceil(currencyBoxes.length / itemsPerPage);

  for (let i = 0; i < totalPages; i++) {
    const page = document.createElement('div');
    page.classList.add('currencies-box');

    for (let j = i * itemsPerPage; j < (i + 1) * itemsPerPage && j < currencyBoxes.length; j++) {
      page.appendChild(currencyBoxes[j].cloneNode(true));
    }

    document.querySelector('.currency-list').appendChild(page);
  }

  for (let i = 0; i < totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.dataset.pageIndex = i;
    button.addEventListener('click', function() {
      showPage(i);
      setActiveButton(i);
    });
    document.querySelector('.curency-pagination').appendChild(button);
  }

  showPage(0);
  setActiveButton(0);

  function showPage(pageIndex) {
    const pages = document.querySelectorAll('.currencies-box');
    pages.forEach(function(page, index) {
      if (index === pageIndex) {
        page.style.display = 'grid';
      } else {
        page.style.display = 'none';
      }
    });
  }

  function setActiveButton(activeIndex) {
    const buttons = document.querySelectorAll('.curency-pagination button');
    buttons.forEach((button, index) => {
      if (index === activeIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  if (currencyBoxes.length <= itemsPerPage) {
    const currencyPagination = document.querySelector('.curency-pagination');
    currencyPagination.classList.add("hidden");
  }
});

function changeCurreny(id) {
  var rateKey = id;
  var csrfToken = window.modules.layouts.csrftoken;
  custom.ajax({
    url: "/change-currency",
    data: "currency=" + rateKey + "&_csrf=" + csrfToken,
    method: "POST",
    success: function(response) {
      if (response.status === "success") {
        window.location.reload();
      }
    }
  });
}

const orderalertcontent = document.querySelector(".order-alert-content");
const orderalertbox = document.querySelector(".order-alert-box");

function alertclose() {
  orderalertbox.classList.toggle("close"), orderalertcontent.classList.toggle("close")
}

function openLangBox() {
  document.querySelector('.language-dropdown').classList.toggle("active")
  document.querySelector('.language-bg').classList.toggle("active")
  document.querySelector('.language-btn').classList.toggle("active")
}

function closeLangBox() {
  document.querySelector('.language-dropdown').classList.remove("active")
  document.querySelector('.language-bg').classList.remove("active")
  document.querySelector('.language-btn').classList.remove("active")
}

function categoryIcon(id) {
  if (id === "-1") {
    id = 0;
  }
  if (window.siteCategory && window.siteCategory[id]) {
    return window.siteCategory[id].icon;
  } else {
    return null;
  }
}

if (pathname === "/" || pathname.startsWith("/order/")) {
  function changeSelector(theme) {
    localStorage.setItem('selectedTheme', theme);
    window.location.reload();
  }

  function initializeTheme() {
    const selectedTheme = localStorage.getItem('selectedTheme') || 'default';
    document.querySelectorAll('.theme-select-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    if (selectedTheme) {
      const activeBtn = document.querySelector(`.theme-select-btn.${selectedTheme}`);
      if (activeBtn) {
        activeBtn.classList.add('active');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', initializeTheme);

  function selectSize(size) {
    if (size === 1) {
      document.getElementById('size-1').className = 'col-span-6';
      document.getElementById('size-2').className = 'col-span-6';
    } else if (size === 2) {
      document.getElementById('size-1').className = 'col-span-7';
      document.getElementById('size-2').className = 'col-span-5';
    }
    localStorage.setItem('selectedSize', size);
    document.querySelectorAll('.size-select-box').forEach(box => {
      box.classList.remove('active');
    });
    document.querySelector(`.size-select-box:nth-child(${size})`).classList.add('active');
  }

  function initialize() {
    const selectedSize = localStorage.getItem('selectedSize') || 1;
    selectSize(parseInt(selectedSize));
  }

  document.addEventListener('DOMContentLoaded', initialize);

  var buyBtn = document.querySelector('.buy-btn');
  var masterForm = document.querySelector('.master-form');
  var masterFormHeight = masterForm.offsetHeight;
  window.addEventListener('scroll', function() {
    var masterFormRect = masterForm.getBoundingClientRect();
    var isVisible = masterFormRect.top >= 0 && masterFormRect.bottom <= window.innerHeight;

    if (isVisible) {
      buyBtn.classList.add('hidden');
    } else {
      buyBtn.classList.remove('hidden');
    }
  });

  window.addEventListener('resize', function() {
    masterFormHeight = masterForm.offsetHeight;
    var masterFormRect = masterForm.getBoundingClientRect();
    var isVisible = masterFormRect.top >= 0 && masterFormRect.bottom <= window.innerHeight;

    if (isVisible) {
      buyBtn.classList.add('hidden');
    } else {
      buyBtn.classList.remove('hidden');
    }
  });

  $(document).ready(function() {
    if (localStorage.getItem('selectedTheme') === null) {
      localStorage.setItem('selectedTheme', 'default');
    }

    var selector = localStorage.getItem('selectedTheme');

    if (selector === 'default') {
      $('.default-selector').removeClass('hidden');
      $('.neworder-form').removeClass('masterBox');
      $('.master-select').addClass('hidden');
    } else if (selector === 'master') {
      $('.default-selector').addClass('hidden');
      $('.neworder-form').addClass('masterBox');
      $('.master-select').removeClass('hidden');
    }

    function updateDropdown(type) {
      var dropdown = $(`#${type}-dropdown`),
          options = $(`#orderform-${type} option`),
          selectedText = $(`#orderform-${type} option:selected`).text(),
          selectedID = $(`#orderform-${type}`).val(),
          iconID = type === "service" ? window.modules.siteOrder.services[selectedID].cid : selectedID,
          selectedIcon = categoryIcon(iconID) || '';
      masterSelector = localStorage.getItem('selectedTheme');

      if (type == "service") {
        var selectID = selectedID + " - ";
        var selectedText = window.modules.siteOrder.services[selectedID].origin_name;
        updateServiceDetails(selectedID, selectedIcon)

        if (masterSelector == "master") {
          var dropdown = $(`#master-service-dropdown`);
        } else {
          var dropdown = $(`#${type}-dropdown`);
        }

      } else {
        var selectID = "";
      }


      $(`#${type}-dropdown-select`).html(selectedIcon + selectID + selectedText);

      dropdown.empty();

      options.each(function() {
        var $this = $(this),
            id = $this.val(),
            icon = categoryIcon(id) || '',
            content = "",
            activeClass = id === selectedID ? 'active' : '';
        if (type == "service") {
          var name = window.modules.siteOrder.services[id].origin_name;
          var priceFormat = window.modules.siteOrder.services[id].name_template.rate_formatted;
          var rateFormat = "";

          if (priceFormat && priceFormat.match(/[\d.,]+/g)) {
            rateFormat = priceFormat.match(/[\d.,]+/g).pop();
          }
        } else {
          var name = $this.text();
          var rateFormat = "";
        }


        if (type === "category" && $this.attr('data-show') !== 'hidden') {
          content = `<div class="category-dropdown-item ${activeClass}" onclick="selectCategory(${id})">${icon} ${name}</div>`;
        } else if (type === "service" && $this.attr('data-show') !== 'hidden') {

          var serviceData = window.modules.siteOrder.services[id],
              serviceIcon = categoryIcon(serviceData.cid) || '',
              price = formatPrice(serviceData.price),
              description = serviceData.price,
              activeClass = id === selectedID ? 'active' : '';

          let descriptionText = description ? description : translate('notdescription');

          var serviceFeatures = ['guaranteed', 'recommended', 'faster', 'canceled', 'timed', 'discounted', 'slow'];
          serviceFeatures.forEach(function(feature) {
            var featurePattern = new RegExp(`\\['${feature}'\\]`, 'g');
            descriptionText = descriptionText.replace(featurePattern, '');
          });

          var featuresHtml = '';
          var featuresContent = '';
          var featureIcons = {
            'guaranteed': 'fa-shield-check',
            'recommended': 'fa-thumbs-up',
            'faster': 'fa-forward',
            'canceled': 'fa-times',
            'timed': 'fa-clock',
            'discounted': 'fa-arrow-down',
            'slow': 'fa-thumbs-down'
          };

          if (serviceData.description !== null && serviceData.description !== undefined) {
            serviceFeatures.forEach(function(feature) {
              if (serviceData.description.includes(feature) && featureIcons[feature]) {
                featuresHtml += `<span class="service-features-item ${feature}"><i class="fa ${featureIcons[feature]}"></i><span class="feature-name"> ${translate(feature)}</span></span>`;
              }
            });

            if (featuresHtml !== '') {
              featuresContent = `<div class="service-features">${featuresHtml}</div>`;
            }
          }

          var infoHtml = `<div class="serivce-dropdown-bottom"><div class="service-dropdown-info"><span class="service-dropdown-minmax"><span class="service-dropdown-info-item"><i class="fas fa-long-arrow-down"></i>  <b>${serviceData.min}</b></span> : <span class="service-dropdown-info-item"><i class="fas fa-long-arrow-up"></i> <b>${serviceData.max}</b></span></span><span class="service-dropdown-info-item avg"><i class="fas fa-clock"></i> <b>${serviceData.average_time}</b></span></span></div>${featuresContent}</div>`,

              content = `<div class="service-dropdown-item ${activeClass}" onclick="selectService(${id})"><div class="service-dropdown-top"><div class="service-dropdown-name"><span class="s-name">${serviceIcon} ${id} - ${name}</span></div><span class="service-dropdown-price">${price}<small>${rateFormat} ${translate('adet')}</small></span></div>${infoHtml}<div class="buy-btn-master"><div class="open-order-form buy-btn-item" onclick="openOrderForm()"><i class="fad fa-shopping-cart"></i></div></div></div>`;
        }

        if (content) dropdown.append(content);
      });
    }

    function formatPrice(value) {
      var formatValue = window.modules.siteOrder.currency.template,
          result = removeZerosAfterDecimal(value, 2, 4);
      return formatValue.replace(/{{value}}/g, result);
    }

    function removeZerosAfterDecimal(number, minDecimalPlaces, maxDecimalPlaces) {
      var strNumber = number.toString(),
          decimalIndex = strNumber.indexOf(".");
      if (decimalIndex === -1) return strNumber;
      let endIndex = decimalIndex + maxDecimalPlaces + 1;
      while (endIndex > decimalIndex + minDecimalPlaces && strNumber[endIndex - 1] === '0') endIndex--;
      return strNumber.slice(0, endIndex);
    }

    ['category', 'service'].forEach(function(type) {
      updateDropdown(type);

      $(`#orderform-${type}`).change(function() {
        updateDropdown(type);
      });
    });

    function toggleDropdown(type, action) {
      const dropdown = document.querySelector(`.${type}-dropdown`),
            dropdownBg = document.querySelector(`.${type}-dropdown-bg`);
      dropdown.classList[action]('active');
      dropdownBg.classList[action]('active');
    }

    window.selectCategory = function(val) {
      $('#orderform-category').val(val).trigger("change");
      toggleDropdown('category', 'remove');
    };

    window.selectService = function(val) {
      $('#orderform-service').val(val).trigger("change");
      toggleDropdown('service', 'remove');
      $('.buy-btn').addClass('active');
      updateServiceDetails(val);
    };

    window.openCategoryDropDown = function() {
      toggleDropdown('category', 'toggle');
    };
    window.closeCategoryDropDown = function() {
      toggleDropdown('category', 'remove');
    };
    window.openServiceDropDown = function() {
      toggleDropdown('service', 'toggle');
    };
    window.closeServiceDropDown = function() {
      toggleDropdown('service', 'remove');
    };
  });

  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchServiceList = document.getElementById('search-service-list');
    const searchServiceBox = document.querySelector('.search-service-list');

    searchInput.addEventListener('input', function() {
      adjustSearchServiceBoxHeight();
      if (searchInput.value.length > 0) {
        searchServices(searchInput.value);
        searchServiceBox.classList.add('active');
      } else {
        searchServiceList.innerHTML = '';
        searchServiceBox.classList.remove('active');
      }
    });

    document.addEventListener('click', function(event) {
      if (!searchServiceBox.contains(event.target) && event.target !== searchInput) {
        searchServiceBox.classList.remove('active');
      }
    });
  });

  function closeSearchBox() {
    const searchServiceList = document.querySelector('.search-service-list');
    searchServiceList.classList.remove('active');
  }

  function searchServices(searchText) {
    const services = window.modules.siteOrder.services;
    let matchingServices = [];

    if (!searchText.trim()) {
      document.getElementById('search-service-list').innerHTML = '<p>Arama için bir kelime girin.</p>';
      document.querySelector('.search-service-box').classList.remove('empty');
      return;
    }

    for (const serviceId in services) {
      const service = services[serviceId];
      if (service.name.toLowerCase().includes(searchText.toLowerCase())) {
        matchingServices.push(service);

        const formatValue = window.modules.siteOrder.currency.template;
        let price = service.price.toString();
        const decimalIndex = price.indexOf(".");
        if (decimalIndex !== -1) {
          let endIndex = decimalIndex + 1 + 4;
          while (endIndex > decimalIndex + 1 + 2 && price[endIndex - 1] === '0') endIndex--;
          price = price.slice(0, endIndex);
        }
        service.formattedPrice = formatValue.replace(/{{value}}/g, price);
      }
    }
    let resultsHtml = matchingServices.map(service => {
      const priceFormat = service.name_template.rate_formatted;
      const rateFormat = priceFormat.match(/[\d.,]+/g) ? priceFormat.match(/[\d.,]+/g).pop() : '';
      const searchCategoryID = service.cid;
      return `<div class="service-dropdown-item" onclick="selectSearchService(${service.id})">
        <div class="service-dropdown-top">
            <div class="service-dropdown-name">
                ${categoryIcon ? categoryIcon(searchCategoryID) : ''} ${service.id} - ${service.origin_name}
            </div>
            <span class="service-dropdown-price">
                ${service.formattedPrice}<small>${rateFormat} ${translate ? translate('adet') : 'adet'}</small>
            </span>
        </div>
        <div class="service-dropdown-info">
            <span class="service-dropdown-info-item">${translate ? translate('min') : 'min'} : <b>${service.min}</b></span>
            <span class="service-dropdown-info-item">${translate ? translate('max') : 'max'} : <b>${service.max}</b></span>
            <span class="service-dropdown-info-item">${translate ? translate('ortalama') : 'ortalama'} : <b>${service.average_time}</b></span>
        </div>
    </div>`;
    }).join('');

    if (matchingServices.length === 0) {
      resultsHtml = '<p>' + translate('notfound') + '</p>';
      document.querySelector('.search-service-box').classList.remove('empty');
    } else {
      document.querySelector('.search-service-box').classList.add('empty');
    }

    document.getElementById('search-service-list').innerHTML = resultsHtml;
  }

  function adjustSearchServiceBoxHeight() {
    const newOrderForm = document.querySelector('.neworder-form');
    const searchServiceBox = document.querySelector('.search-service-box');

    if (newOrderForm && searchServiceBox) {
      const height = newOrderForm.offsetHeight;
      searchServiceBox.style.maxHeight = `${height}px`;
    }
  }

  function selectSearchService(serviceId) {
    const categoryID = window.modules.siteOrder.services[serviceId].cid;
    selectCategory(categoryID);
    selectService(serviceId);
    closeSearchBox()
  }


  function updateServiceDetails(value) {
    $('#select-service-detail-box').html("");
    var serviceDetails = window.modules.siteOrder.services[value];

    if (serviceDetails) {
      let formatValue = window.modules.siteOrder.currency.template;
      let price = serviceDetails.price.toString();
      const decimalIndex = price.indexOf(".");
      if (decimalIndex !== -1) {
        let endIndex = decimalIndex + 2 + 1;
        price = price.slice(0, endIndex);
      }
      const formattedPrice = formatValue.replace(/{{value}}/g, price);

      let descriptionText = serviceDetails.description ? serviceDetails.description : translate('notdescription');

      var serviceFeatures = ['guaranteed', 'recommended', 'faster', 'canceled', 'timed', 'discounted', 'slow'];
      serviceFeatures.forEach(function(feature) {
        var featurePattern = new RegExp(`\\['${feature}'\\]`, 'g');
        descriptionText = descriptionText.replace(featurePattern, '');
      });

      var featuresHtml = '';
      var featureIcons = {
        'guaranteed': 'fa-shield-check',
        'recommended': 'fa-thumbs-up',
        'faster': 'fa-forward',
        'canceled': 'fa-times',
        'timed': 'fa-clock',
        'discounted': 'fa-arrow-down',
        'slow': 'fa-thumbs-down'
      };

      if (serviceDetails.description !== null && serviceDetails.description !== undefined) {
        serviceFeatures.forEach(function(feature) {
          if (serviceDetails.description.includes(feature)) {
            featuresHtml += `<span class="service-features-item ${feature}"><i class="fad ${featureIcons[feature]}"></i> ${translate(feature)}</span>`;
          }
        });
      }


      var detailsHtml = `
                <span class="select-service-title">${translate('secili')} ${translate('servis')}</span>
                <div class="select-service-item">
                    <span class="select-service-name">${serviceDetails.origin_name}</span>
                    <div class="select-service-feature">
                        <span class="select-service-feature-item">
                            <span class="select-id">${translate('servis')} ID <b>${serviceDetails.id}</b></span>
                            <span class="select-price">${translate('servis')} ${translate('ucreti')}<b>${formattedPrice}</b></span>
                            <span class="select-avg">${translate('tamamlama')} ${translate('suresi')}<b>${serviceDetails.average_time}</b></span>
                            <span class="select-minmax"><b>${translate('min')} : ${serviceDetails.min}</b><b> ${translate('max')} : ${serviceDetails.max}</b></span>
                        </span>
                    </div>
                </div>
                <div class="service-features" id="service-features">${featuresHtml}</div>
                <span class="select-service-title">${translate('aciklama')}</span>
                <div class="select-service-description">${descriptionText}</div>
            `;
      $('#select-service-detail-box').html(detailsHtml);
    }
  }
}

function openDescription(element) {
  var description = element.getAttribute('data-description');

  if (!description) {
    description = translate('notdescription')
  }

  var serviceID = element.getAttribute('data-service-id');
  document.getElementById('description-content').innerHTML = description;
  var buyButton = document.getElementById('service-buy-btn');
  buyButton.href = "/?service=" + serviceID;
  openModalID("servicesDescription")
}

function copyText(text, message, icon) {
  var hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "text");
  hiddenInput.setAttribute("value", text);
  hiddenInput.style.position = "absolute";
  hiddenInput.style.left = "-9999px";

  document.body.appendChild(hiddenInput);
  hiddenInput.select();
  document.execCommand("copy");

  document.body.removeChild(hiddenInput);

  openNotify(icon, message)
}


function openNotify(icon, message) {
  var notification = document.getElementById('notification');
  var notifyText = document.getElementById('notifyText');

  if (notification.style.display === 'block') {
    notification.style.animation = 'none';
    notification.offsetHeight;
  }

  notifyText.innerHTML = '<i class="fad ' + icon + '"></i> ' + message;
  notification.style.display = 'block';
  notification.style.animation = 'fade-in-up 0.5s forwards';
  new Audio("https://cdn.fsksoft.com/Blow.mp3").play();

  if (window.notifyTimeout) {
    clearTimeout(window.notifyTimeout);
  }

  window.notifyTimeout = setTimeout(function() {
    notification.style.animation = 'fade-out-down 0.5s forwards';
    setTimeout(function() {
      notification.style.display = 'none';
    }, 500);
  }, 3000);
}

if (pathname === "/addfunds") {
  document.addEventListener('DOMContentLoaded', function() {
    const paymentDropdown = document.getElementById('payment-dropdown');
    const paymentDropdownSelect = document.getElementById('payment-dropdown-select');
    const methodSelect = document.getElementById('method');

    function populatePaymentDropdown() {
      let paymentMethodsHTML = '';
      for (let option of methodSelect.options) {
        const paymentName = option.text;

        function paymentDescriptionPull(paymentName) {
          const parts = paymentName.split('~');
          return parts.length > 1 ? '<span class="payment-description">' + parts[1].trim() + '</span>' : "";
        }

        const paymentDescription = paymentDescriptionPull(paymentName);

        function extractBeforeTilde(paymentName) {
          const parts = paymentName.split('~');
          return parts[0].trim();
        }

        const paymentSmallName = extractBeforeTilde(paymentName);

        paymentMethodsHTML += `<div class="payment-method" data-id="${option.value}" onclick="selectPayment('${option.value}')"><span class="payment-name"><input type="radio" name="payment-method" class="payment-radio" id="radio-${option.value}">${paymentSmallName}</span> ${paymentDescription}</div>`;
      }
      paymentDropdown.innerHTML = paymentMethodsHTML;
      updateSelectedPayment();
      highlightActivePaymentMethod();
    }

    function updateSelectedPayment() {
      const selectedOption = methodSelect.options[methodSelect.selectedIndex];

      function extractBeforeTilde(paymentName) {
        const parts = paymentName.split('~');
        return parts[0].trim();
      }

      const selectName = extractBeforeTilde(selectedOption.text);

      paymentDropdownSelect.textContent = selectName;
    }

    function highlightActivePaymentMethod() {
      const selectedValue = methodSelect.value;
      document.querySelectorAll('.payment-method').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-id') === selectedValue) {
          item.classList.add('active');
          item.querySelector('.payment-radio').checked = true;
        } else {
          let radio = item.querySelector('.payment-radio');
          if (radio) radio.checked = false;
        }
      });
    }

    window.openPaymentDropDown = function() {
      document.querySelector('.payment-dropdown').classList.add('active');
      document.querySelector('.payment-dropdown-bg').classList.add('active');
      populatePaymentDropdown();
    }

    window.closePaymentDropDown = function() {
      document.querySelector('.payment-dropdown').classList.remove('active');
      document.querySelector('.payment-dropdown-bg').classList.remove('active');
    }

    window.selectPayment = function(paymentId) {
      methodSelect.value = paymentId;
      $(methodSelect).trigger("change");

      const selectedPaymentName = methodSelect.querySelector(`option[value='${paymentId}']`).text;

      function extractBeforeTilde(paymentName) {
        const parts = paymentName.split('~');
        return parts[0].trim();
      }

      const selectName = extractBeforeTilde(selectedPaymentName);

      paymentDropdownSelect.textContent = selectName;

      highlightActivePaymentMethod();
      closePaymentDropDown();
    };

    populatePaymentDropdown();
    updateSelectedPayment();
  });

  function setAmount(value) {
    var element = document.getElementById('amount');
    element.value = value;
  }
}


if (pathname === "/tickets") {
  document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const reportOrder = urlParams.get('reportOrder');

    if (reportOrder) {
      subjectVal('1');
      document.getElementById('orderID').value = reportOrder;
    } else {
      subjectVal('1');
    }

    var subjectItems = document.querySelectorAll('.subject-item');
    subjectItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var id = this.getAttribute('id');
        subjectVal(id);
      });
    });

    document.getElementById('ticketsend').addEventListener('submit', function(event) {

      if (document.getElementById('subject').value === translate('order')) {
        var orderIDValue = document.getElementById('orderID').value;

        var messageTextarea = document.getElementById('message');
        messageTextarea.value = orderIDValue + " " + translate('orderMessage') + "\n" + messageTextarea.value;
      }
    });
  });

  function subjectVal(subjectId) {
    var subjects = [translate('order'), translate('payment'), translate('other')];
    var subjectInput = document.getElementById('subject');
    var subjectItems = document.getElementsByClassName('subject-item');
    var orderIdElement = document.querySelector('.orderIdClass');
    var orderID = document.getElementById('orderID');

    for (var i = 0; i < subjectItems.length; i++) {
      subjectItems[i].classList.remove('active');
      subjectItems[i].querySelector('input[type="radio"]').checked = false;
    }

    var selectedSubject = document.getElementById(subjectId);
    if (selectedSubject) {
      selectedSubject.classList.add('active');
      subjectInput.value = subjects[subjectId - 1];
      selectedSubject.querySelector('input[type="radio"]').checked = true;
    }

    if (subjectId === '1') {
      if (orderIdElement) {
        orderIdElement.classList.add('active');
        orderIdElement.classList.remove('hidden');
        orderID.required = true;
      }
    } else {
      if (orderIdElement) {
        orderIdElement.classList.add('hidden');
        orderIdElement.classList.remove('active');
        orderID.required = false;
      }
    }
  }

  function uploadTicket() {
    var uploaderButton = document.getElementById('uploader-button');
    uploaderButton.click();
  }
}
if (pathname.startsWith("/viewticket/")) {
  const images = document.querySelectorAll('.zoomable-image');

  images.forEach(image => {
    image.onclick = function() {
      images.forEach(img => {
        if (img !== image) {
          img.classList.remove('enlarged');
        }
      });
      image.classList.toggle('enlarged');
    };
  });

  window.onclick = function(event) {
    if (!event.target.classList.contains('zoomable-image')) {
      images.forEach(img => {
        img.classList.remove('enlarged');
      });
    }
  };

  function uploadTicket() {
    var uploaderButton = document.getElementById('uploader-button');
    uploaderButton.click();
  }
}

function openSettings() {
  const settingsContent = document.querySelector('.settings-content');
  const settingsBg = document.querySelector('.settings-bg');
  settingsContent.classList.add('active');
  settingsBg.classList.add('active');
}

function closeSettings() {
  const settingsContent = document.querySelector('.settings-content');
  const settingsBg = document.querySelector('.settings-bg');
  settingsContent.classList.remove('active');
  settingsBg.classList.remove('active');
}

function buyBtnForm() {
  $('.buy-btn').removeClass('active');
  $('.master-form').addClass('active');

  var masterFormElement = document.querySelector('.master-form');
  var elementOffsetTop = $(masterFormElement).offset().top;
  var windowHeight = $(window).height();
  var scrollTo = elementOffsetTop - (windowHeight / 2) + ($(masterFormElement).outerHeight() / 2);

  $('html, body').animate({
    scrollTop: scrollTo
  }, 1000);
}


function openOrderForm() {
  $('.buy-btn').removeClass('active');
  $('.master-form').removeClass('active').addClass('opened');
  $('.master-form-bg').addClass('active');
}

function closeOrderForm() {
  $('.buy-btn').removeClass('active');
  $('.master-form').removeClass('active opened');
  $('.master-form-bg').removeClass('active');
}

function openMainHeader() {
  $('.main-header-mobile').addClass('active');
}

function closeMainHeader() {
  $('.main-header-mobile').removeClass('active');
}

function notifyOpen() {
  var duyuruBox = document.querySelector('.announcements-box');
  duyuruBox.classList.toggle('active');
}

function notifyClose() {
  var duyuruBox = document.querySelector('.announcements-box');
  duyuruBox.classList.remove('active');
}

const AssistantLanguages = {
  tr: 'tr-TR',
  en: 'en-US',
  ru: 'ru-RU',
  pt: 'pt-BR',
  ar: 'ar-SA'
};


let audioContext, analyzer, recognition, microphoneStream, mediaStream;
let silenceTimer;

function initAudioAndRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error('Bu tarayıcı SpeechRecognition API\'sini desteklemiyor.');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = AssistantLanguages[window.siteSettings.lang] || 'en-US';
  recognition.continuous = true;
  recognition.interimResults = true;

  setupEventHandlers();

  audioContext = new(window.AudioContext || window.webkitAudioContext)();
  navigator.mediaDevices.getUserMedia({
    audio: true
  })
    .then(stream => {
    mediaStream = stream;
    microphoneStream = audioContext.createMediaStreamSource(stream);
    analyzer = audioContext.createAnalyser();
    microphoneStream.connect(analyzer);
    updateVolume();
    recognition.start();
  })
    .catch(error => {
    console.error('Mikrofon erişim hatası:', error);
  });

  document.getElementById('voice-text').innerText = '';
}

function setupEventHandlers() {
  recognition.onresult = function(event) {
    clearTimeout(silenceTimer);

    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        document.getElementById('voice-text').innerText = transcript;
        handleCommands(transcript.toLowerCase());
      } else {
        interimTranscript += transcript;
        document.getElementById('voice-text').innerText = interimTranscript;
      }
    }
    document.getElementById('voice-text').classList.add('show');

    silenceTimer = setTimeout(() => {
      stopAudioAndRecognition();
    }, 4000);
  };

  recognition.onstart = function() {
    document.querySelector('.voice-animation').classList.add('active');
  };

  recognition.onend = function() {
    document.querySelector('.voice-animation').classList.remove('active');
  };
}

function handleCommands(text) {
  let recognized = false;
  let earliestCommandIndex = text.length;
  let commandToExecute = null;

  const commands = {
    'orders': ['order', 'sipariş', 'заказ', 'pedido', 'طلبات'],
    'support': ['support', 'destek', 'поддержка', 'suporte', 'الدعم'],
    'services': ['service', 'servis', 'сервис', 'serviço', 'الخدمات'],
    'addfunds': ['add funds', 'para yükle', 'добавить средства', 'adicionar fundos', 'إضافة الأموال'],
    'tickets': ['ticket', 'destek talebi', 'билет', 'bilhete', 'تذاكر'],
    'affiliates': ['affiliate', 'ortaklık', 'партнер', 'afiliado', 'الشركاء'],
    'child-panel': ['child panel', 'alt panel', 'дочерняя панель', 'painel de filho', 'لوحة الطفل'],
    'api': ['api', 'api', 'апи', 'api', 'واجهة برمجة التطبيقات'],
    'terms': ['terms', 'şartlar', 'условия', 'termos', 'البنود والشروط'],
    'faq': ['faq', 'sss', 'чаво', 'faq', 'الأسئلة الشائعة'],
    'drip-feed': ['drip feed', 'damlama besleme', 'капельное питание', 'alimentação por gotejamento', 'تغذية بالتنقيط'],
    'subscriptions': ['subscription', 'abonelik', 'подписка', 'assinatura', 'الاشتراكات'],
    'massorder': ['mass order', 'toplu sipariş', 'массовый заказ', 'pedido em massa', 'طلبات جماعية'],
    'refill': ['refill', 'yeniden doldur', 'пополнение', 'recarga', 'إعادة ملء'],
    'updates': ['updates', 'güncellemeler', 'обновления', 'atualizações', 'التحديثات'],
    'blog': ['blog', 'blog', 'блог', 'blog', 'مدونة'],
    'account': ['account', 'hesap', 'аккаунт', 'conta', 'الحساب']
  };


  const specialCommands = {
    'hello': ['hello', 'merhaba', 'привет', 'olá', 'مرحبا']
  };

  for (let key in commands) {
    commands[key].forEach(command => {
      let index = text.indexOf(command);
      if (index !== -1 && index < earliestCommandIndex) {
        earliestCommandIndex = index;
        commandToExecute = key;
        recognized = true;
      }
    });
  }

  for (let key in specialCommands) {
    specialCommands[key].forEach(command => {
      let index = text.indexOf(command);
      if (index !== -1 && index < earliestCommandIndex) {
        earliestCommandIndex = index;
        commandToExecute = key;
        recognized = true;
      }
    });
  }

  if (recognized) {
    const isSpecial = Object.keys(specialCommands).includes(commandToExecute);
    playSound(commandToExecute, () => {
      if (!isSpecial) {
        navigateTo('/' + commandToExecute);
      }
    }, isSpecial);
  } else {
    playSound('default', () => {}, false);
  }
}


function playSound(context, callback) {
  const mp3Path = `https://cdn.fsksoft.com/voiceAssist/${context}/${context}_${window.siteSettings.lang}.mp3`;
  const audio = new Audio(mp3Path);
  audio.onended = callback;
  audio.onerror = function() {
    callback();
  };
  audio.play();
}

function navigateTo(url) {
  window.location.href = url;
}

function updateVolume() {
  if (!analyzer) return;
  analyzer.fftSize = 256;
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyzer.getByteFrequencyData(dataArray);

  let sum = 0;
  for (let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
  }
  const average = sum / bufferLength;
  const scaleLevel = Math.min(Math.max(average / 128, 0.5), 1.5);
  document.querySelector('.voice-animation-item').style.transform = `scale(${scaleLevel})`;
  requestAnimationFrame(updateVolume);
}

function stopAudioAndRecognition() {
  if (recognition) {
    recognition.stop();
  }
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
  }
  if (audioContext) {
    audioContext.close();
  }
}