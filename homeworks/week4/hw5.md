## 請以自己的話解釋 API 是什麼
是一種介面，透過這個介面，開發者可以了解如何和提供這個介面的 application 互動。
其中一種 API 又可以稱作 Web API，也是現在最廣泛出現的，他是指程式開發者提供一個網址 url 來讓其他開發者訪問，並提供使用這個 API 的文件（說明書），這樣其他開發者就可以閱讀文件了解如何使用這個 API 來存取所需的資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
401 Unauthorized 
未認證，表示 client-side 沒有必要的憑證或伺服器拒絕了 client-side 提供的憑證。

403 Forbidden
伺服器理解請求，但是拒絕執行，表示 client-side 沒有權限。

502 Bad Gateway
表示伺服器的某個服務沒有正確執行，可能是處理請求的時間太長或伺服器主機問題。

附上一個介紹常見與不常見的 status code 有趣的連結：[常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://restaurantsxxxx

| 說明 | Method | path | 參數 | 範例  |
|--------|--------|--------|--------|--------|
| 獲取所有餐廳 | GET | /restaurants |  無 | /restaurants | 
| 獲取單一餐廳 | GET | /restaurants/:id | 無 | /restaurants/10 |
| 新增餐廳 | POST | /restaurants | name: 餐廳名 | 無 |
| 刪除餐廳 | DELETE | /restaurants/:id | 無 | 無 |
| 更改餐廳資訊 | PATCH | /restaurants/:id | name: 餐廳名 | 無 |
