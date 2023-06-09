## [Demo](https://data-table-test-task.vercel.app/auth) 
email: eve.holt@reqres.in 
пароль: pistol


## Description

Это тестовое задание, которое подразумевает собой разработку таблицы с данными, поступающими из стороннего API (В данном случае используется Reqres.in). Есть страницы авторизации и регистрации, а также главная страница с непосредственно таблицей, которая в моем случае отображает список пользователей. Попытался совместить тестовое задание и обучение новым технологиям, в данном случае я обучался в процессе написания приложения Next js и Server Side Rendering, который развивает команда Next js , react-table и headless ui компонентам, которыми делится энтузиаст shad/cn.

## Technologies used

Проект собран с помощью фреймворка для React - Next js.
Запросы SSR отправляются с помощью встроенного fetch от Next js, для запросов с клиентской части используется библиотека SWR.
Routing реализован благодаря новой app директории от Next js, которую недавно признали стабильной.
Для реализации функционала и UI непосредственно самой таблицы используется библиотека tanstack/react-table.
Цветовая, стилевая UI реализация построена с помощью компонентов от shad/cn, которые построены с помощью Tailwind css.
Базовая верстка так же реализована с использованием фреймворка Tailwind css.
Стиль кода, по которому написано приложение - Airbnb.

## Features

Таблица полностью кастомизуемая, так же как и внешний вид компонентов.
Есть возможность скрыть какие-нибудь столбцы или скрыть все вовсе.
Реализована пагинация с навигацией на следующую и предыдущую страницу.
Возможность поиска пользователя из таблицы по Email.
Возможность сортировки Email с начала алфавита или с конца.
При клике на кнопку Actions можно быстро скопировать Email выбранного пользователя.
Хотел сначала в Actions добавить функцию серверного удаления и редактирования пользователя, но только потом заметил, что reqres API дает только преднастроенное количество данных и не позволяет наполнять своими.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
