## 請解釋後端與前端的差異。

前端處理看得見的、呈現在瀏覽器上的介面，網頁設計和開發都屬於前端的領域，當使用者透過瀏覽器介面採取點擊、傳送等動作時，前端程式需要將這些動作產生的相應指令傳遞到後端，讓後端採取對應的行為，並接收後端傳來的資料，分析後呈現在介面上顯示給使用者。有時候前端也提供只在該使用者的瀏覽器就可以產生回饋的功能，例如即時的站內搜尋、搜尋結果排序、Gmail 的只顯示未讀信件。

後端需要處理與伺服器、資料庫的互動，當使用者透過瀏覽器傳遞資料或要求資料時，後端程式負責伺服器提供和處理資料的邏輯，並將資料庫儲存的資料以瀏覽器看得懂的方式傳遞，例如 撰寫 API，提供存取資料庫的介面。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

Google 瀏覽器接收到搜尋 JavaScript 的指令，透過 HTTPS 協定發送 **request** 請求給 Google server，Google server 去資料庫存取資料，然後 Google server 再把搜尋 JavaScript 的相關資料 **response** 回傳給瀏覽器，瀏覽器將這些資料呈現在網頁上。


## 請列舉出 5 個 command line 指令並且說明功用

`open .`  -> 打開目前路徑的資料夾

`open -a "Sublime Text"`  -> 打開應用程式 Sublime Text 

`open -a "Sublime Text" index.js`  -> 用 Sublime Text 打開檔案 index.js 

`open -a "Sublime Text" test`  -> 用 Sublime Text 打開資料夾 test

`say hello`  -> 讓電腦說 hello（ mac only ）