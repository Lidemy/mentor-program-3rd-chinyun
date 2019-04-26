``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 1 行，設定變數 i 是 0，檢查 i 是否 < arr 的長度，是的話繼續執行，開始進入第一圈迴圈

2. 執行第 2 行，判斷 arr 的第 i 個值是否小於等於 0，如果是，返回 'invalid' 並結束執行 ｀function isValid()｀，否則進入下一圈迴圈繼續檢查，在每一圈檢查，直到迴圈結束

3. 執行第 3 行，設定變數 i 是 2，檢查 i 是否 < arr 的長度，是的話繼續執行，開始進入第一圈迴圈

4. 執行第 4 行，判斷 arr 的第 i 個值是否不等於前一個值＋前前一個值，是的話，返回 'invalid' 並結束執行 ｀function isValid()｀，否則否則進入下一圈迴圈繼續檢查，在每一圈檢查，直到迴圈結束

5. 返回 return 'valid'，執行完畢。