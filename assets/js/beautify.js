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
  clearInterval(changeTitle)
}

const addIcon = function () {
  var icon = document.createElement('link')
  icon.href = 'https://www.uestc.edu.cn/favicon.ico?n=8e7z368tn51'
  icon.rel = 'shortcut icon'
  document.getElementsByTagName('head')[0].appendChild(icon)
}
window.addEventListener('click', function () {
  var changeTitle = setInterval(addTitle, 100)
})
addIcon()
console.log('success!')
