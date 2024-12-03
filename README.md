# IndieMusic

## Опис проекту

Статичний веб-ресурс присвячений інді-музиці. Проект містить інформацію про основні напрямки інді-музики, відомих виконавців і підбірку рекомендованих пісень.

Ресурс створений за допомогою HTML, CSS, та JavaScript, з використанням Gulp для автоматизації процесів розробки (мініфікації, роботи з препроцесорами CSS).

Розгорнутий на GitHub Pages за посиланням: https://maryna32.github.io/IndieMusic/dist/

## Завдання ресурсу

1. Надати інформацію про історію та особливості інді музики.
2. Описати основні піджанри, включаючи інді-рок, інді-поп, інді-фолк, інді-електроніку та шугейз.
3. Запропонувати підбірку пісень для прослуховування.

## Цільова аудиторія

Цільова аудиторія цього проекту включає людей, які цікавляться інді-музикою. Це також можуть бути ті, хто хоче дізнатися більше про різні піджанри інді-музики і розширити свої музичні горизонти.

## Аналіз аналогів

- **provos.org**, а саме за посиланням https://www.provos.org/p/what-is-indie-music/

  - **Плюси**: є інформація про історію інді-музики та опис кожного періоду з конкретними прикладами пісень, що до нього відносяться.
  - **Мінуси**: орієнтація лише на історію.

- **usemogul.com**, а саме за посиланням https://www.usemogul.com/post/what-is-indie-music-a-comprehensive-guide
  - **Плюси**: є інформація про історію інді-музики, особливості, вплив та майбутні перспекти.
  - **Мінуси**: сухий текст, немає ні пісень, ні посилань, ні відеороликів.

## Функціонал проекту

1. Інформативна сторінка з історією та описом жанру.
2. Секції з основними піджанрами, кожна з ілюстраціями та прикладами виконавців, натиснувши на посилання яких, перенаправяєшся на вікіпедію з інформацією про конкретного виконавця.
3. Рекомендовані пісні з посиланнями на YouTube.
4. Легкий і неперевантажений дизайн, що забезпечує комфортне користування. Можливість ввімкнути темну тему.

## Технології

- **HTML/CSS/JS** - основні технології для створення контенту та стилів.
- **Gulp**:
  - компіляція SCSS у CSS.
  - мініфікація HTML та JS.
- **CSS-препроцесор** - SCSS для структурованого стилю.

## Інструкція для розгортання

1. Склонуйте репозиторій:
   ```bash
   git clone https://github.com/Maryna32/IndieMusic.git
   ```
2. Скачати npm з офіційного сайту
3. В корені проекту ввести по черзі наступні команди:

   ```bash
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   npm init
   npm install --save-dev sass
   npm install --save-dev gulp
   npm install --save-dev gulp-sass gulp-clean-css gulp-autoprefixer
   npm install --save-dev gulp-terser
   npm install --save-dev browser-sync
   npm install --save-dev gulp-htmlmin
   ```

4. Щоб запустити проект на локальному сервері і gulp зміг обробити файли:

   ```bash
   gulp
   ```

5. Щоб зупинити сервер достатньо в командному рядку натиснути сполучення клавіш 'Ctrl+C'.
