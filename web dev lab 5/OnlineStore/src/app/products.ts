export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img1: string,
  img2: string,
  img3: string
  rating: number,
  link: string,
  like?: number,
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 373663,
    description: 'технология NFC: Да \n' +
      'цвет: черный \n' +
      'тип экрана: OLED, Super Retina XDR \n' +
      'диагональ: 6.1 дюйм \n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'размер оперативной памяти: 4 ГБ\n',
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h7e/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h10/46392663310366/apple-iphone-13-128gb-cernyj-102298404-3-Container.jpg",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 14 128Gb сиреневый',
    price: 422444,
    description: 'технология NFC: Да\n' +
      'цвет: сиреневый\n' +
      'тип экрана: OLED, Super Retina XDR display\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 3279 мАч',
    rating: 5,
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/ha3/63072545734686/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h25/63072545964062/apple-iphone-14-128gb-sirenevyj-106363117-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hb4/63075498065950/apple-iphone-14-128gb-sirenevyj-106363117-3.jpg",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000#!/item",
    like: 0
  },
  {
    id: 3,
    name: "Смартфон Samsung Galaxy S22 8 ГБ/128 ГБ черный",
    description: "технология NFC: Да\n" +
      "цвет: черный\n" +
      "диагональ: 6.1 дюйм\n" +
      "размер оперативной памяти: 8 ГБ\n" +
      "процессор: 8-ядерный Exynos 2200\n" +
      "объем встроенной памяти: 128 ГБ\n" +
      "емкость аккумулятора: 3700 мАч",
    rating: 5,
    price: 339696,
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/he3/62349965230110/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hc8/62349963788318/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h8d/62349964017694/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-3.jpg",
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item",
    like: 0
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy Z Flip 3 New 8/128Gb зеленый',
    price: 542222,
    description: 'технология NFC: Да\n' +
      'цвет: зеленый\n' +
      'диагональ: 6.7 дюйм\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'процессор: 8-ядерный Qualcomm Snapdragon 888\n' +
      'емкость аккумулятора: 3300 мАч',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/h24/47074381201438/samsung-galaxy-z-flip-3-new-8-128gb-zelenyj-102826971-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h77/47074381660190/samsung-galaxy-z-flip-3-new-8-128gb-zelenyj-102826971-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h07/47074382118942/samsung-galaxy-z-flip-3-new-8-128gb-zelenyj-102826971-3.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip-3-new-8-128gb-zelenyi-102826971/?c=750000000#!/item',
    like: 0
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy Z Fold4 12 ГБ/256 ГБ серый',
    price: 914847,
    description: 'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана: Dynamic AMOLED 2X\n' +
      'размер оперативной памяти: 12 ГБ\n' +
      'объем встроенной памяти: 256 ГБ\n' +
      'диагональ: 7.6 дюйм',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hd5/62179068051486/samsung-galaxy-z-fold4-12-gb-256-gb-seryj-smart-casy-samsung-galaxy-watch-4-classic-106306593-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h0a/62179068510238/samsung-galaxy-z-fold4-12-gb-256-gb-seryj-smart-casy-samsung-galaxy-watch-4-classic-106306593-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hed/62179068968990/samsung-galaxy-z-fold4-12-gb-256-gb-seryj-smart-casy-samsung-galaxy-watch-4-classic-106306593-3.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-256-gb-seryi-106306593/?c=750000000#!/item',
    like: 0
  },
  // Headphones
  {
    id: 6,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: 118800,
    description: 'Отличные наушники. Изоляция шума, режим прозрачности работают на ура. Качество звука также хорошее.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h3b/62281477718046/apple-airpods-pro-2nd-generation-belyj-106362968-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/h3b/62281478176798/apple-airpods-pro-2nd-generation-belyj-106362968-3.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    like: 0
  },
  {
    id: 7,
    name: 'Наушники TWS F9-5 черные',
    price: 3371,
    description: 'TWS F9-5 беспроводные Bluetooth-наушники Они очень практичны, полностью беспроводные и не нуждаются в кабеле, благодаря чему предоставляют пользователю полную свободу движений. Вы откроете для себя лучшее качество объемного звука 8D. Наушники изготовлены из материалов высшего качества, поэтому мы можем наслаждаться естественным и великолепным звучанием. Дополнительным преимуществом является опция шумоподавления, которая позволяет получить еще лучшее качество звука. Отличный внешний вид и комфорт заставят вас остаться с ними.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h0e/47809640824862/tws-f9-5-cernyj-101769530-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h75/62447889743902/tws-f9-5-seryj-101769530-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h1b/62447890202654/tws-f9-5-cernye-101769530-3.jpg',
    link: 'https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000#!/item',
    like: 0
  },
  {
    id: 8,
    name: 'Наушники JBL Tune 510BT черный',
    price: 23935,
    description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h54/33957525979166/jbl-tune-510bt-cernyj-101420081-2-Container.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h83/33957527027742/jbl-tune-510bt-cernyj-101420081-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
    like: 0
  },
  {
    id: 9,
    name: 'Наушники Apple EarPods Lightning белый',
    price: 12782,
    description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей. Динамики наушников EarPods специально спроектированы так, чтобы обеспечить минимальные потери звука и наилучшее звучание. Наушники EarPods оснащены встроенным пультом, с помощью которого можно регулировать громкость, управлять воспроизведением музыки и видео и принимать или завершать звонки одним нажатием.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h9c/31582164451358/apple-earpods-lightning-belyj-4801876-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h5a/31582166220830/apple-earpods-lightning-belyj-4801876-2-Container.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h4e/31582168055838/apple-earpods-lightning-belyj-4801876-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000#!/item',
    like: 0
  },
  {
    id: 10,
    name: 'Наушники Xiaomi Redmi Buds 3 Lite черный',
    price: 12589,
    description: 'Redmi Buds 3 Lite соединяются со смартфоном по протоколу Bluetooth 5.2 и стабильно работают без неприятных подвисаний. Модель разработана в соответствии со стандартом IP54 и надёжно защищены от пыли, влаги и пота. Наушники отлично подойдут для тренировок в спортзале или езды на велосипеде.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h74/49203482198046/xiaomi-redmi-buds-3-lite-cernyj-103306269-1.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h35/49203482656798/xiaomi-redmi-buds-3-lite-cernyj-103306269-2.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2b/hea/49203483115550/xiaomi-redmi-buds-3-lite-cernyj-103306269-3.jpg',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-misha-dlja-super-semeiki-plombir-800-g-102677014/?c=750000000#!/item',
    like: 0
  },
    // Laptops
    {
      id: 11,
      name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
      price: 389980,
      description: 'диагональ экрана: 15.6 дюйм, видеокарта: NVIDIA GeForce GTX 1650,размер оперативной памяти: 16 ГБ,тип жесткого диска: SSD',
      rating: 5,
      img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
      img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/he7/67236399448094/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-2.jpg',
      img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7f/hcc/67236399677470/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-3.jpg',
      link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
      like: 0
    },
    {
      id: 12,
      name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 477999,
      description: 'Маленький чип. Грандиозный прорыв Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзисторов и объединяет центральный и графический процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производительность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей. 8‑ядерный процессор. Дольше работает. Меньше ест По скорости вычислений чип M1 превосходит все другие процессоры Apple. Такая производительность позволяет выполнять на MacBook Air самые ресурсоёмкие задачи, например редактировать фото и видео на профессиональном уровне или играть в игры со сложной графикой.',
      rating: 5,
      img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
      img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg',
      img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h9f/50489392365598/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
      like: 0
    },
    {
      id: 13,
      name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
      price: 369990,
      description: 'Хороший и мощный компьютер в своем классе. Качество и цена соответствуют.',
      rating: 5,
      img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h7a/62100003160094/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h09/62100003618846/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-3.jpg',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    like: 0
  },
  {
    id: 14,
    name: 'Ноутбук ASUS X515EA-BQ3269 90NB0TY1-M038L0 серый',
    price: 179990,
    description: 'диагональ экрана: 15.6 дюйм,процессор: Intel Core i3 1115G4,видеокарта: Intel UHD Graphics,размер оперативной памяти: 8 ГБ',
    rating: 4.5,
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h08/66428286402590/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-3.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h78/66428285878302/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-2.jpg',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h23/66428285354014/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item',
    like: 0
  },
  {
    id: 15,
    name: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    price: 985194,
    description: 'Превосходный дисплей Liquid Retina XDR с диагональю 14.2 дюйма и большой набор портов станут дополнительными преимуществами. Чип Apple M1 Pro это грандиозное расширение вычислительных и графических возможностей компьютера, ускорение операций машинного обучения. Камера FaceTime HD 1080p с передовым процессором обработки сигналов, чтобы изображение во время видеозвонков было ещё более чётким. Система из шести динамиков, включая низкочастотные с подавлением резонанса. Клавиатура Magic Keyboard с подсветкой и технологией Touch ID, чтобы быстро и безопасно входить в учётные записи и оплачивать покупки. В macOS Monterey есть новые мощные функции для творчества, общения и совместной работы, обновления FaceTime и усовершенствованный браузер Safari.',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hbf/50637730054174/apple-macbook-pro-14-mkgp3-seryj-102866247-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/ha4/50637730283550/apple-macbook-pro-14-mkgp3-seryj-102866247-3.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    like: 0
  },
  // TV
  {
    id: 16,
    name: 'Телевизор Yasin LED-32E7000 81 см черный',
    price: 57739 ,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 32 дюйм\n' +
      'разрешение: 1366x768\n' +
      'поддержка HD: 720p HD\n' +
      'технология Smart TV: Нет\n' +
      'wi-Fi: Да',
    rating: 5,
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h8f/48926248108062/yasin-led-32e7000-cernyj-103411518-2.jpg',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
    link: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    like: 0
  },
  {
    id: 17,
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный\n',
    price: 197930,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 43 дюйм\n' +
      'разрешение: 1920x1080\n' +
      'поддержка HD: 1080p Full HD\n' +
      'wi-Fi: Да\n' +
      'технология Smart TV: Да',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/he1/49319748698142/samsung-ue43t5300au-chernyi-100182013-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    like: 0
  },
  {
    id: 18,
    name: 'Телевизор LG 43LM5772PLA 109 см черный\n',
    price: 178656,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 42.5 дюйм\n' +
      'разрешение: 1920x1080\n' +
      'поддержка HD: 1080p Full HD\n' +
      'технология Smart TV: Да',
    rating: 5,
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h90/49751549247518/dada-sok-mul-tifrukt-1-9-l-100799201-2.jpg',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h0b/49320431288350/lg-43lm5772pla-cernyj-101293496-3.jpg',
    link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    like: 0
  },
  {
    id: 19,
    name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный\n',
    price: 119990 ,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 32 дюйм\n' +
      'разрешение: 1366x768n' +
      'поддержка HD: 720p HD\n' +
      'технология Smart TV: Да',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb7/49320434237470/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h9f/49320434466846/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-3.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    like: 0
  },
  {
    id: 20,
    name: 'Телевизор Yasin 40G7 102 см черный\n',
    price: 114360,
    description: 'тип: LED-телевизор\n' +
      'диагональ: 40 дюйм\n' +
      'разрешение: 1920x1080\n' +
      'поддержка HD: 1080p Full HD\n' +
      'технология Smart TV: Да',
    rating: 5,
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h94/49244137816094/yasin-40g7-cernyj-104045834-2.jpg',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
    link: 'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item',
    like: 0
  }

];
