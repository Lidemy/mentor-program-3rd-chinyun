## 跟你朋友介紹 Git

####  Git 與 GitHub 是什麼？

使用 GitHub + Git 可以幫助程式開發者進行版本控制，以及管理專案不同功能的同時開發。
根據 [維基百科](https://zh.wikipedia.org/wiki/GitHub)：

 >GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務，已經成為了世界上最大的程式碼存放網站和開源社群。

還有 [什麼是 Git？為什麼要學習它？](https://gitbook.tw/chapters/introduction/what-is-git.html)：

  >Git 是一款版本控制軟體，而 GitHub 是一個商業網站，GitHub 的本體是一個 Git 伺服器，但這個網站上的應用程式讓大家可以透過 Web 介面來操作一些原本需要複雜的 Git 指令才能做到的事。

可以知道 GitHub 和 Git 的定義與用途。

#### 如何使用 Git 進行版本控制？

首先可以用 `git status` 這個指令來查詢現在這個工作目錄的狀態 ( 有沒有變動過的檔案 )
一開始還沒有任何變動之前應該會看到：

```sh
$ git status
On branch master
Initial commit
nothing to commit (create/copy files and use "git add" to track)
```
當檔案變動過後，想要將變動做個紀錄，就可以：

新增追蹤，表示把這個檔案交給 Git 來管控了，此時檔案異動被存放在暫存區
```sh
$ git add .  # 將變動過的檔案全部加入
$ git add index.html  # 只加入 index.html
```
如果要讓暫存區的內容永久的存下來的話，需要 commit 這些檔案，表示把內容從暫存區移到儲存庫，`-m “text message”` 是用來說明「你在這次的 Commit 做了什麼事」簡明扼要就可以，但是一定要寫，不寫就不能 commit 。
```sh
$ git commit -m “text message”
```


參考資料來源：[為你自己學 Git](https://gitbook.tw/)