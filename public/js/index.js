
$(document).ready(function() {
    // Получаем ссылку на элемент ссылки на таблицу стилей
    const styleLink = $('#themeStylesheet');
  
    // Слушаем событие нажатия на пункт меню
    $('[data-bs-theme-value]').on('click', function() {
      const themeValue = $(this).attr('data-bs-theme-value');
      applyTheme(themeValue);
    });
  
    // Применяем выбранную тему
    function applyTheme(theme) {
      if (theme === 'light') {
        styleLink.attr('href', 'css/mdb.min.css');
      } else if (theme === 'dark') {
        styleLink.attr('href', 'css/mdb.dark.min.css');
      }
  
      // Сохраняем выбранную тему в localStorage
      localStorage.setItem('selectedTheme', theme);
    }
  
    // При загрузке страницы, применяем сохранённую тему (если есть)
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  });



  document.getElementById("restartButton").addEventListener("click", function() {
    window.location.reload(); // Перезагрузка страницы
  });