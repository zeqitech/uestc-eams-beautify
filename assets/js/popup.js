/**
 * 获取存储的变量
 * @param {String} key 获取存储的键
 */
const getStorage = function () {
  chrome.storage.sync.get(['bg', 'avatar'], function (result) {
    const bg = document.getElementById('bg-url')
    const av = document.getElementById('av-url')
    console.log(result.bg)
    bg.innerHTML = result.bg
    av.innerHTML = result.avatar
  })
}

const main = function () {
  // 获取当前Url
  getStorage()

  // 获取两个确认按钮
  const btn1 = document.getElementById('bg-confirm')
  const btn2 = document.getElementById('avatar-confirm')

  // 获取两个输入框
  const input1 = document.getElementById('bg-input')
  const input2 = document.getElementById('avatar-input')

  // 注册点击事件监听
  btn1.addEventListener('click', function () {
    chrome.storage.sync.set({ bg: input1.value }, function () {
      console.log('Value is set to ' + input1.value)
    })
    window.open('http://eams.uestc.edu.cn/eams/home.action')
  })

  // 为第二个按钮注册监听
  btn2.addEventListener('click', function () {
    chrome.storage.sync.set({ avatar: input2.value }, function () {
      console.log('Value is set to ' + input2.value)
    })
    window.open('http://eams.uestc.edu.cn/eams/home.action')
  })
}

// 执行入口函数
window.onload = main
