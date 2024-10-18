function handleOS() {
    const windowsLink = document.getElementById('windows-app').getAttribute('href');
    const androidLink = document.getElementById('android-app').getAttribute('href');
    const macLink = document.getElementById('mac-app').getAttribute('href');
    const os = platform.os.family;
    const mainDownloadImage = document.querySelector('#main-download-inner img');
    const mainDownloadStrong = document.querySelector('#main-download-inner strong');
    const mainDownloadLink = document.querySelector('#main-download-inner a');

    if (os.toLowerCase() === 'windows') {
        mainDownloadImage.src = 'https://losvar.github.io/solid/android.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن اندروید';
        mainDownloadLink.setAttribute('href', androidLink);
        mainDownloadLink.innerHTML = 'دانلود رایگان';
    }
    else if (os.toLowerCase() === 'android') {
        mainDownloadImage.src = 'https://losvar.github.io/solid/android.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن اندروید';
        mainDownloadLink.setAttribute('href', androidLink);
        mainDownloadLink.innerHTML = 'دانلود فایل .APK';
    }
    else if (os.toLowerCase() === 'os x') {
        mainDownloadImage.src = 'https://losvar.github.io/solid/mac.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن مک';
        mainDownloadLink.setAttribute('href', macLink);
        mainDownloadLink.innerHTML = 'به زودی';
        document.querySelector('.display-none.text-white.position-relative.text-black').classList.remove('display-none');
    }
    else if (os.toLowerCase() === 'tizen') {
        // Handle Tizen OS
        mainDownloadImage.src = 'https://losvar.github.io/solid/tizen.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن تیزن';
        // Set appropriate Tizen link
        mainDownloadLink.setAttribute('href', 'tizen-download-link');
        mainDownloadLink.innerHTML = 'دانلود فایل .TIZEN';
    }
    else if (os.toLowerCase() === 'android tv') {
        // Handle Android TV OS
        mainDownloadImage.src = 'https://losvar.github.io/solid/androidtv.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن اندروید تی وی';
        // Set appropriate Android TV link
        mainDownloadLink.setAttribute('href', 'android-tv-download-link');
        mainDownloadLink.innerHTML = 'دانلود فایل .APK';
    }
}



function init() {
    if (document.body.id == 'home') {
        handleOS();
        const logo = document.getElementById('logo');
        const logoPos = [logo.getBoundingClientRect().x, logo.getBoundingClientRect().y];
        const logoClone = logo.cloneNode(true);
        const container = document.querySelector('.container');
        logoClone.style.position = 'absolute';
        logoClone.style.left = (document.documentElement.clientWidth - logoClone.width) / 2 + 'px';
        logoClone.style.top = (document.documentElement.clientHeight - logoClone.height) / 2 + 'px';
        logoClone.id = 'logo-clone';

        document.body.appendChild(logoClone);

        const logoClonePos = [logoClone.getBoundingClientRect().x, logoClone.getBoundingClientRect().y];
        gsap.to('#logo-clone', {
            opacity: 0,
            duration: .4,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: 3,
            onComplete: function() {

                gsap.to(logoClone, {
                    x: logoPos[0] - logoClonePos[0],
                    y: logoPos[1] - logoClonePos[1],
                    delay: .25,
                    duration: .5,
                    onComplete: function() {
                        logo.style.opacity = 0;
                        gsap.to(container, {
                            opacity: 1,
                            delay: .5,
                            duration: .5,
                        });
                        gsap.set('#title-img img', {
                            x: '101%'
                        });
                        gsap.to('#title-img img', {
                            x: 0,
                            delay: .5,
                            duration: .5
                        });
                        gsap.set('#website-link-outer a', {
                            x: '101%'
                        });
                        gsap.to('#website-link-outer a', {
                            x: 0,
                            delay: .5,
                            duration: .5
                        })
                    }
                });
            }
        });
    }

}
init();
