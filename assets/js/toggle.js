const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const localStorageKey = 'themePreference';

        // 1. FUNCIÓN PARA APLICAR EL TEMA
        function applyTheme(isDark) {
            if (isDark) {
                body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
            } else {
                body.classList.remove('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
            }
        }

        // 2. CARGAR LA PREFERENCIA AL INICIAR
        // Comprueba si el usuario tiene una preferencia guardada
        let savedTheme = localStorage.getItem(localStorageKey);
        
        if (savedTheme === 'dark') {
            applyTheme(true);
        } else if (savedTheme === 'light') {
            applyTheme(false);
        } else {
            // Si no hay preferencia guardada, usa la preferencia del sistema (media query)
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark);
            // No guardar aún, solo aplicar
        }

        // 3. ESCUCHADOR DE EVENTOS PARA EL BOTÓN
        themeToggle.addEventListener('click', () => {
            // Determina el tema actual después del clic
            const isCurrentlyDark = body.classList.contains('dark-mode');

            // Alterna el tema y actualiza el Local Storage
            if (isCurrentlyDark) {
                applyTheme(false); // Cambia a modo claro
                localStorage.setItem(localStorageKey, 'light');
            } else {
                applyTheme(true); // Cambia a modo oscuro
                localStorage.setItem(localStorageKey, 'dark');
            }
        });