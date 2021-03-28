let darkMode = localStorage.getItem('darkmode')
const darkModeToggle = $('.dark-mode-toggle')

const setDarkModeIcon = () => {
  darkMode = localStorage.getItem('darkmode')
  if (darkMode == 'enabled') {
    $('.sun').show()
    $('.moon').hide()
  } else {
    $('.sun').hide()
    $('.moon').show()
  }
}
const enableDarkMode = () => {
  $('html').addClass('dark')
  localStorage.setItem('darkmode', 'enabled')
  setDarkModeIcon()
}
const disableDarkMode = () => {
  $('html').removeClass('dark')
  localStorage.setItem('darkmode', null)
  setDarkModeIcon()
}

if ( darkMode === 'enabled' ) {
  enableDarkMode()
}

setDarkModeIcon()

darkModeToggle.on('click', () => {
  darkMode = localStorage.getItem('darkmode')
  if (darkMode !== 'enabled') {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
  console.log(darkMode)
})
