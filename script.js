document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    if (!links || links.length === 0) return;

    const clearActive = () => links.forEach(l => l.classList.remove('link-active'));

    links.forEach(link => {
        link.addEventListener('click', () => {
            clearActive();
            link.classList.add('link-active');
            return typeEvent = "click";
        });
    });
});

