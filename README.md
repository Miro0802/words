# words 一字千金
網頁版「一字千金」，提供兩人即時手寫對戰顯示功能

# 安裝install
* 下載 [node.js](https://nodejs.org/en/download/)
* 下載此套件
* 打開終端機，移至本套件資料夾，安裝必要套件
````Shell
npm install socket.io
npm install express
````

* 執行 
````Shell
node server.js
````

# 設定
* 編輯 index.html、draw1.html 及 draw2.html 中的 serverip，更改為 server 的區網 ip

# 使用
打開網頁瀏覽器，前往
* server 端 http://serverip:8080/
* user1 端 http://serverip:8080/draw1
* user2 端 http://serverip:8080/draw2
