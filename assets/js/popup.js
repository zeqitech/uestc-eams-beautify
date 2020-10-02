const btn1 = document.getElementById('bg-confirm')
const btn2 = document.getElementById('avatar-confirm')

const input1 = document.getElementById('bg-input')
const input2 = document.getElementById('avatar-input')

btn1.addEventListener('click', function () {
  chrome.storage.sync.set({ bg: input1.value }, function () {
    console.log('Value is set to ' + input1.value)
  })
  window.open('http://eams.uestc.edu.cn/eams/home.action')
})

btn2.addEventListener('click', function () {
  chrome.storage.sync.set({ avatar: input2.value }, function () {
    console.log('Value is set to ' + input2.value)
  })
  window.open('http://eams.uestc.edu.cn/eams/home.action')
})
