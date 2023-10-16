document.addEventListener('DOMContentLoaded', function() {
    // Cursor-Animation
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const damping = 1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * damping;
        cursorY += (mouseY - cursorY) * damping;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animate);
    }

    animate();

    // Sichtbarkeitsprüfung für Titel
    const sectionTitles = document.querySelectorAll('.section-title');

    function checkTitleVisibility() {
        const windowHeight = window.innerHeight;
        sectionTitles.forEach(title => {
            const titleTop = title.getBoundingClientRect().top;
            if (titleTop < windowHeight - 100 && titleTop + title.offsetHeight > 0) { 
                title.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', checkTitleVisibility);
    checkTitleVisibility();

    // Ladeanimation
    let loadCounter = 0;
    const loaderElement = document.querySelector(".loader");

    function transitionToMainContent() {
        const loaderWrapper = document.querySelector(".loader-wrapper");
        const mainContent = document.querySelector("body");
    
        loaderWrapper.classList.add("fade-out");
        mainContent.classList.add("fade-in");
    
        // Nachdem die Ausblendanimation abgeschlossen ist, setzen wir den Ladebildschirm auf display: none;
        setTimeout(() => {
            loaderWrapper.style.display = "none";
        }, 1000); // Diese Verzögerung sollte der Dauer Ihrer fadeOut-Animation entsprechen.
    }
    
    function updateLoader() {
        if (loadCounter < 100) {
            loadCounter++;
            loaderElement.textContent = loadCounter + "%";
            setTimeout(updateLoader, 20);
        } else {
            setTimeout(transitionToMainContent, 500); // Eine kleine Verzögerung, bevor die Übergangsanimation startet
        }
    }

    updateLoader(); // Starten Sie die Ladeanimation
});

