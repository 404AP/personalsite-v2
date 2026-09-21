try { const theme = localStorage.getItem('ap-theme'); if (theme === 'night') document.documentElement.dataset.theme = 'night'; } catch {}
