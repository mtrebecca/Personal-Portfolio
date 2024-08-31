function setThemeBasedOnTime() {
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour: 'numeric' };
    const hourInBrazil = new Intl.DateTimeFormat('pt-BR', options).format(now);
    const hour = parseInt(hourInBrazil);

    const root = document.documentElement;

    if (hour >= 5 && hour < 14) {
        root.style.setProperty('--background-color-light', '#FFF');
        root.style.setProperty('--color-primary-light', '#284260');
        root.style.setProperty('--color-secondary-light', '#6E859F');
        root.style.setProperty('--background-color-dark', '#01080E');
        root.style.setProperty('--color-primary-dark', '#D7F9FF');
        root.style.setProperty('--color-secondary-dark', '#D7F9FF');
    } else {
        root.style.setProperty('--background-color-light', '#01080E');
        root.style.setProperty('--color-primary-light', '#D7F9FF');
        root.style.setProperty('--color-secondary-light', '#98D4DE');
        root.style.setProperty('--background-color-dark', '#01080E');
        root.style.setProperty('--color-primary-dark', '#D7F9FF');
        root.style.setProperty('--color-secondary-dark', '#D7F9FF');
    }
}

document.addEventListener('DOMContentLoaded', setThemeBasedOnTime);
