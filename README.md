# APP Booking
Приложение для панелей бронирования, отображающее статус помещения и позволяющее совершать быстрые бронирования.
## Работа с исходным кодом
1. Выполните команду `npm install` для установки всех зависимостей.
2. Для запуска проекта в режиме разработки выполните команду `npm start`
## Сборка проекта
Есть два варианта сборки apk приложения:
1. Сборка через облако с помощью expo:
`npx eas build -platform android -profile preview`  
2. На локальной машине (быстрее):
`npx eas build -platform android -local -profile preview`  
При успешной сборке apk, в корне проекта окажется файл.
## Работа с приложением
При первом запуске приложения на устройстве может наблюдаться белый экран. Поскольку приложение еще не сконфигурировано.
### Конфигурация
Для открытия окна конфигурации необходимо совершить 5 быстрых тапов в любой области экрана.
В окне конфигурации есть следующие поля для заполнения:
* A4S / Хост - адрес бэкэнда системы бронирования;
* A4S / login - логин от учетной записи со статусом "внешний админ";
* A4S / password - пароль от учетной записи со статусом "внешний админ";
* A4S / id карты - идентификатор карты. Если не указывать, то стартовой страницей будет не карта, а страница помещения;
* A4S / число объектов - если указать `1`, то не будет выбора помещений. При указанном идентификаторе карты, заполнять не нужно;
* ID 0-n - айди объектов;
* Тип панели - выбор вендора панели для настройки драйвера подсветки. В зависимости от выбранного драйвера могут меняться поля его конфигурации.