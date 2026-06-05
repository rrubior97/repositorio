// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verificar si el usuario ya tenía una preferencia guardada (opcional pero profesional)
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    actualizarTextoBoton(currentTheme);

    // Escuchar el evento click en el botón
    themeToggleBtn.addEventListener('click', () => {
        // Obtener el tema actual
        let theme = document.documentElement.getAttribute('data-theme');
        
        // Cambiar al opuesto
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        // Aplicar el nuevo tema al documento
        document.documentElement.setAttribute('data-theme', theme);
        
        // Guardar la elección en el almacenamiento local
        localStorage.setItem('theme', theme);
        
        // Actualizar el texto o icono del botón
        actualizarTextoBoton(theme);
    });

    // Función auxiliar para cambiar el texto del botón
    function actualizarTextoBoton(tema) {
        if (tema === 'dark') {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Oscuro';
        }
    }
});