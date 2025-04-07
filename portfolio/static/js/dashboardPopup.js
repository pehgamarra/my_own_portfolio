const dashboardPopup = document.getElementById('dashboardPopup');
const popupIframe = document.getElementById('popupIframe');
const popupDashboardTitle = document.getElementById('popupDashboardTitle');
const popupDashboardDescription = document.getElementById('popupDashboardDescription');
const popupDashboardLink = document.getElementById('popupDashboardLink');
const dashboardPopupClose = document.getElementById('dashboardPopupClose');

function openDashboardPopup(url, title, description, externalLink, titlePt, descPt) {
    popupIframe.src = url;

    popupDashboardTitle.innerText = title;
    popupDashboardDescription.innerText = description;

    popupDashboardTitle.setAttribute('data-title-en', title);
    popupDashboardTitle.setAttribute('data-title-pt', titlePt || title);

    popupDashboardDescription.setAttribute('data-description-en', description);
    popupDashboardDescription.setAttribute('data-description-pt', descPt || description);

    if (externalLink) {
        popupDashboardLink.href = externalLink;
        popupDashboardLink.style.display = 'inline-block';
    } else {
        popupDashboardLink.style.display = 'none';
    }

    dashboardPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.id = 'dashboard-popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeDashboardPopup();
        }
    });

    if (typeof getCurrentLanguage === 'function') {
        const lang = getCurrentLanguage();
        window.switchLanguage(lang);
    }
}

function closeDashboardPopup() {
    dashboardPopup.style.display = 'none';
    popupIframe.src = '';
    document.body.style.overflow = '';
    const overlay = document.getElementById('dashboard-popup-overlay');
    if (overlay) {
        overlay.remove();
    }
}

dashboardPopupClose.addEventListener('click', closeDashboardPopup);

document.addEventListener('click', function (event) {
    const card = event.target.closest('.project-card');
    if (!card) return;

    const url = card.dataset.url;
    const title = card.dataset.title;
    const description = card.dataset.description;
    const link = card.dataset.link;

    const titlePt = card.querySelector('.dashboard-title')?.getAttribute('data-title-pt') || title;
    const descPt = card.querySelector('.dashboard-description')?.getAttribute('data-description-pt') || description;

    openDashboardPopup(url, title, description, link, titlePt, descPt);
});
