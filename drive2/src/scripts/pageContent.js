const resolveImage = (imageModule) => imageModule.default || imageModule;

const articleImages = {
  1: resolveImage(require("../images/1.jpg")),
  2: resolveImage(require("../images/2.jpg")),
  3: resolveImage(require("../images/3.jpg")),
  4: resolveImage(require("../images/4.jpg")),
  5: resolveImage(require("../images/5.jpg")),
  6: resolveImage(require("../images/6.jpg")),
  7: resolveImage(require("../images/7.jpg")),
};

module.exports = {
  time: 1780286400000,
  blocks: [
    {
      type: "header",
      data: {
        text: "Часы в приборной панели",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "В последнее время ощутил нехватку часов в машине. На руку смотреть очень неудобно, а при включенном навигаторе на экране телефона не отображается текущее время. И снова нашел решение в бж pastime.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Часы есть во всех комплектациях, но в некоторых просто не вырезано окошко в пластике и отсутствуют кнопки настройки.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Начнем с этого самого окошка. Нужно снять приборную панель. Этот процесс я уже описывал в заметке «Замена лампочки подсветки приборной панели».",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Стекло и пластиковая рамка держатся только на защелках. Но отвертка все же понадобится, чтобы снять плату со светодиодом иммобилайзера.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[1],
        caption: "Разобрал приборную панель",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "На пластике есть контур, по которому должно быть вырезано окошко для часов.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[2],
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "В меру своих возможностей стараемся вырезать аккуратное окошко в пластике. Мелкие косяки на гранях не будут сильно заметны.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[3],
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Собираем и устанавливаем панель на место.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[4],
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Остается только заменить панель с кнопками управления экраном, где отображается одометр и часы.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "<b>GM 96496270</b> — выключатель приборной панели.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[5],
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Можно и не покупать эту панель, а впаять какие-то кнопки или замыкать определенные провода для настройки часов и минут.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[6],
        caption:
          "Обозначение контактов штекера в машине, разобранная панель и ее электрическая схема",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Собираем все вместе и включаем зажигание.",
      },
    },
    {
      type: "image",
      data: {
        url: articleImages[7],
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Теперь нам доступны штатные часы в машине.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Настроить часы очень просто. Есть всего три кнопки:",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "<b>H</b> — настройка часа в 12-ти часовом формате;<br><b>M</b> — настройка минут;<br><b>S</b> — округлить время до ближайшего целого часа;",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Кнопка S позволяет задать время точно по сигналу на радио или телефону. Например, 7:14 будет округлено вниз до 7:00, а 8:50 станет 9:00.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Время на часах сбросится, если будет отключен аккумулятор.",
      },
    },
  ],
  version: "2.18.0",
};
