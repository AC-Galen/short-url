# 短網址生產器

## Features/功能
* 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.google.com；送出表單之後，畫面會回傳格式化後的短網址，如 http://ancient-eyrie-53682.herokuapp.com/lj6ie
* 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 http://ancient-eyrie-53682.herokuapp.com/lj6ie），瀏覽器就會導向原本的網站（如 https://www.google.com）

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Mongoose](https://mongoosejs.com/)

## Installation/專案安裝

```
git clone https://github.com/AC-Galen/short-url.git
cd short-url
npm install
```

### Run/執行專案
```
npm run start
```
若成功開啟伺服器你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看網站