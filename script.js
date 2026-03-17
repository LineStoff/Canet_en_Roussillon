function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}





// --- Consent Mode v2 (Google Analytics) ---
if (typeof gtag === "function") {
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
    });
}

// --- Création dynamique de la bannière cookies ---
document.addEventListener("DOMContentLoaded", function () {

    // Si déjà accepté ou refusé → ne pas afficher
    if (localStorage.getItem("cookieConsent")) return;

    // Création du conteneur
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 420px;
        background: #F5EEDC;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        font-family: inherit;
        z-index: 9999;
        text-align: center;
    `;

    banner.innerHTML = `
        <h3 style="margin-top:0; color:#0A3D62; font-size:20px;">Cookies</h3>
        <p style="font-size:14px; line-height:1.5; margin-bottom:20px;">
            Nous utilisons des cookies pour mesurer l’audience du site.
        </p>

        <button id="cookie-accept" style="
            background:#0A3D62;
            color:white;
            border:none;
            padding:10px 18px;
            border-radius:8px;
            cursor:pointer;
            margin-right:10px;
        ">Accepter</button>

        <button id="cookie-refuse" style="
            background:#ccc;
            color:#333;
            border:none;
            padding:10px 18px;
            border-radius:8px;
            cursor:pointer;
        ">Refuser</button>
    `;

    document.body.appendChild(banner);

    // Bouton accepter
    document.getElementById("cookie-accept").onclick = function () {
        localStorage.setItem("cookieConsent", "accepted");

        if (typeof gtag === "function") {
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }

        banner.remove();
    };

    // Bouton refuser
    document.getElementById("cookie-refuse").onclick = function () {
        localStorage.setItem("cookieConsent", "refused");

        if (typeof gtag === "function") {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }

        banner.remove();
    };
});
