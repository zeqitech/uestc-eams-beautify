/**
 * 根据Url给每个页面添加标题
 */
const addTitle = function () {
  const pageTitle = document.getElementsByTagName('title')[0]
  const pageUrl = window.location.href
  console.log(pageUrl)
  if (
    pageUrl === 'http://eams.uestc.edu.cn/eams/home!submenus.action?menu.id='
  ) {
    pageTitle.innerHTML = '教务系统'
  } else if (
    pageUrl ===
    'http://eams.uestc.edu.cn/eams/home!childmenus.action?menu.id=845'
  ) {
    pageTitle.innerHTML = '我的信息'
  } else if (
    pageUrl ===
    'http://eams.uestc.edu.cn/eams/home!childmenus.action?menu.id=844'
  ) {
    pageTitle.innerHTML = '课程管理'
  } else if (
    pageUrl ===
    'http://eams.uestc.edu.cn/eams/home!childmenus.action?menu.id=3147'
  ) {
    pageTitle.innerHTML = '我的重修'
  } else if (
    pageUrl ===
    'http://eams.uestc.edu.cn/eams/home!childmenus.action?menu.id=2754'
  ) {
    pageTitle.innerHTML === '辅修与双学位'
  } else {
    return
  }
  window.clearInterval(changeTitle)
}

/**
 * 给网页添加小图标
 */
const addIcon = function () {
  var icon = document.createElement('link')
  icon.href = 'https://www.uestc.edu.cn/favicon.ico?n=8e7z368tn51'
  icon.rel = 'shortcut icon'
  document.getElementsByTagName('head')[0].appendChild(icon)
}

/**
 * 获取存储的变量
 * @param {String} key 获取存储的键
 */
const getStorage = function (key) {
  chrome.storage.sync.get([key], function (result) {
    console.log(result.bg)
    if (key === 'bg') {
      console.log('bg')
      const body = document.getElementsByTagName('body')[0]
      body.style =
        'background: url(' +
        result.bg +
        ') no-repeat center !important; \n background-size: cover !important;'
      console.log(body.style.background)
    } else if (key === 'avatar') {
      const avatar = document.getElementsByClassName('welcome_bar')[0]
        .firstElementChild.firstElementChild
      avatar.src = result.avatar
    }
  })
}

/**
 * 创建背景遮罩
 */
const createBg = function () {
  const body = document.getElementsByTagName('body')[0]
  const bgEl = document.createElement('div')
  bgEl.id = 'bgcontainer'
  body.appendChild(bgEl)
}

const addAuthor = function () {
  const bottom = document.getElementById('BottomBg')
  const author = document.createElement('div')
  author.id = 'author'
  author.innerHTML =
    "Extension Designed By <a href='https://shaunyoung.cn'>Shaun Young</a> with <span style='color: red;'>❤</span>"
  bottom.appendChild(author)
}

/**
 * 入口函数
 */
const main = async function () {
  addAuthor()
  addIcon()
  createBg()
  getStorage('bg')
  getStorage('avatar')
  console.log('success!')
}

/**
 * 执行入口函数
 */
window.onload = main
