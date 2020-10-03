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

  // 获取底部按钮
  const btn3 = document.getElementsByClassName('donate')[0]
  const btn4 = document.getElementsByClassName('suggest')[0]

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

  // 为捐赠按钮注册事件
  btn3.addEventListener('click', function () {
    window.open(
      'https://github.com/shaunyoung-11/uestc-eams-beautify#0x03-%E6%8D%90%E8%B5%A0%E5%BB%BA%E8%AE%AE'
    )
  })

  // 意见建议按钮
  btn4.addEventListener('click', function () {
    window.open(
      'https://github.com/shaunyoung-11/uestc-eams-beautify#32-%E5%BB%BA%E8%AE%AE%E6%84%8F%E8%A7%81'
    )
  })
}

// 执行入口函数
window.onload = main
