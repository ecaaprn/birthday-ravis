/* ==========================================================================
   BIRTHDAY WEBSITE - JAVASCRIPT ENGINE
   Complete Multi-Screen Flow, Audio Synth, 3D Gift, Bouquet & Interactions
   ========================================================================== */

'use strict';

/* ─── CONFIGURATION ──────────────────────────────────────────── */
const CONFIG = {
    // PIN rahasia untuk membuka gembok
    PIN: '100726',
    NAME: 'Special Champion',
    DATE: 'Today · The Most Special Day',

    // Kalimat efek mesin tik di Hero Section
    TYPEWRITER_TEXTS: [
        'Hari ini spesial banget, khusus buat kamu',
        'Setiap detik sama kamu selalu bikin aku bersyukur',
        'Terima kasih udah datang di hidup aku yaa sayang',
        'Aku berharap semua impian dan harapan kamu segera terwujud',
        'Aku sayang banget sama kamu mas'
    ],

    // Daftar bunga di seksi A Digital Bouquet
    BOUQUET_FLOWERS: [
        { emoji: '🌸', msg: 'Aku bersyukur bisa dipertemukan sama laki-laki sebaik kamu, sayang.', left: 50, top: 25 },
        { emoji: '🌺', msg: 'Tuhan selalu jaga kamu di manapun kamu berada, dan aku sayang kamu lebih dari kata-kata bisa ungkapkan.', left: 25, top: 45 },
        { emoji: '🌷', msg: 'Dari semua doa yang aku panjatkan, kamu jawaban yang paling aku tunggu di hidup aku.', left: 75, top: 45 },
        { emoji: '🌼', msg: 'Sukses terus buat kamu tahun ini, sehat selalu dan jauh dari segala penyakit ya sayang.', left: 11, top: 80 },
        { emoji: '🌹', msg: 'Kerjaan dan kuliah kamu makin dimudahkan, rezeki makin lancar dan berkah terus dari segala arah.', left: 89, top: 80 },
        { emoji: '🌻', msg: 'Kita bisa terus bareng-bareng ngelewatin banyak hal sampai nanti, apapun yang terjadi.', left: 35, top: 110 },
        { emoji: '💐', msg: 'Bucket ini adalah simbol rasa terima kasih dan doa terbaik untuk hari ulang tahunmu yang luar biasa.', left: 65, top: 110 }
    ],

    // Foto Polaroid di seksi Our Photo Memories (Foto Nyata Pilihan)
    POLAROIDS: [
        {
            location: 'Sky Tower Kuningan',
            caption: 'Ketemu spot bagus buat lihat kota dari atas, kebetulan sama kamu juga.',
            rotate: -3,
            imgUrl: 'photos/sky-tower-kuningan.jpg'
        },
        {
            location: 'Gelora Bung Karno',
            caption: 'Jalan-jalan malam di GBK, rame tapi enak buat cerita panjang.',
            rotate: 3,
            imgUrl: 'photos/gelora-bung-karno.jpg'
        },
        {
            location: 'Kopi Nako Monas',
            caption: 'Nongkrong santai sambil ngopi, obrolan panjang yang ga kerasa waktunya.',
            rotate: -2,
            imgUrl: 'photos/kopi-nako-monas.jpg'
        }
    ],

    // Daftar Lagu di Pemutar Musik Vinyl (File lokal + YouTube link sebagai fallback)
    PLAYLIST: [
        {
            name: 'Someone To Stay',
            artist: 'Vancouver Sleep Clinic',
            duration: '4:14',
            localFile: 'music/Someone_To_Stay.mp3',
            youtubeUrl: 'https://youtu.be/XAfzvKiE_qg?si=PgrIeIvzc6wEKn2P',
            youtubeId: 'XAfzvKiE_qg'
        },
        {
            name: 'Somewhere Only We Know',
            artist: 'Keane',
            duration: '3:57',
            localFile: 'music/Somewhere_Only_We_Know.mp3',
            youtubeUrl: 'https://youtu.be/Oextk-If8HQ?si=HwtGL3RWY7JMiWT4',
            youtubeId: 'Oextk-If8HQ'
        },
        {
            name: 'Iris',
            artist: 'Goo Goo Dolls',
            duration: '4:49',
            localFile: 'music/Iris.mp3',
            youtubeUrl: 'https://youtu.be/nYrEL9ecAWA?si=G1x7Kvw4XmUOd5N8',
            youtubeId: 'nYrEL9ecAWA'
        },
        {
            name: 'Daylight',
            artist: 'Maroon 5',
            duration: '3:32',
            localFile: 'music/Daylight.mp3',
            youtubeUrl: 'https://youtu.be/ZxcGPnOcDSQ?si=oQB71GVVaZpmKX-m',
            youtubeId: 'ZxcGPnOcDSQ'
        },
        {
            name: 'I Wanna Be Yours',
            artist: 'Arctic Monkeys',
            duration: '3:03',
            localFile: 'music/I_Wanna_Be_Yours.mp3',
            youtubeUrl: 'https://youtu.be/nyuo9-OjNNg?si=PBxQ-16NJ8ibMndP',
            youtubeId: 'nyuo9-OjNNg'
        }
    ],

    // 12 Catatan Lipat di dalam Toples Kaca (The Jar)
    REASONS: [
        'Cara kamu tersenyum selalu berhasil bikin harinya jauh lebih baik.',
        'Kamu selalu jadi pendengar yang baik, bahkan buat cerita yang paling receh sekalipun.',
        'Aku ngerasa didengerin tiap kali cerita ke kamu, bukan cuma sekadar ditanggepin doang.',
        'Kamu berani jujur soal apa yang kamu rasain, meskipun itu ga gampang buat diomongin.',
        'Cara kamu memperlakukan keluarga dan orang-orang terdekat selalu bikin aku respect.',
        'Kamu masih inget kebiasaan-kebiasaan kecil aku yang bahkan aku sendiri ga sadar.',
        'Kamu ga pernah takut buat coba hal baru, walau kadang hasilnya ga sesuai ekspektasi.',
        'Kamu ga pernah maksa aku jadi orang lain, selalu nerima aku apa adanya.',
        'Cara kamu ngejelasin sesuatu selalu sabar, walau harus diulang berkali-kali.',
        'Kamu tahu persis kapan harus serius dan kapan harus bercanda buat mencairkan suasana.',
        'Tanggung jawab kamu ke hal-hal kecil sekalipun nunjukin gimana seriusnya kamu ngejalanin hidup.',
        'Kehadiran kamu aja udah cukup buat bikin aku ngerasa semuanya bakal baik-baik aja.'
    ]
};


/* ─── DOM READY ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================================
    // 1. COSMIC BLUE PARTICLES CANVAS
    // ======================================================================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class StardustParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.2 + 0.6;
            this.speedY = -(Math.random() * 0.4 + 0.1); // float upward
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.55 + 0.15;
            this.fadeSpeed = Math.random() * 0.008 + 0.003;
            this.fadingIn = Math.random() > 0.5;
            this.isIceBlue = Math.random() > 0.35;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;

            if (this.fadingIn) {
                this.alpha += this.fadeSpeed;
                if (this.alpha >= 0.7) this.fadingIn = false;
            } else {
                this.alpha -= this.fadeSpeed;
                if (this.alpha <= 0.08) this.fadingIn = true;
            }

            if (this.y < 0) this.y = canvas.height;
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.isIceBlue
                ? `rgba(56, 189, 248, ${this.alpha})`
                : `rgba(224, 242, 254, ${this.alpha * 0.8})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
        for (let i = 0; i < count; i++) {
            particles.push(new StardustParticle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();


    // ======================================================================
    // AUDIO ENGINE & BACKGROUND SURPRISE SONG ("Besok Kita Pergi Makan")
    // ======================================================================
    let audioCtx = null;
    function getAudioContext() {
        if (!audioCtx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AC();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
    }

    function playChime(freq = 440, duration = 0.2, type = 'sine') {
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) { }
    }

    function playCelebrationChord() {
        const notes = [261.63, 329.63, 392.00, 523.25];
        notes.forEach((freq, idx) => setTimeout(() => playChime(freq, 0.5, 'sine'), idx * 100));
    }

    // ── Floating Button & Background Song: "Besok Kita Pergi Makan" ────────────────
    const fabAudio = new Audio('music/Besok_Kita_Pergi_Makan.mp3');
    fabAudio.loop = true;
    fabAudio.volume = 0.85;
    let fabPlaying = false;
    let isPlaying = false; // Flag status pemutar Special Playlist

    const floatingMusicBtn = document.getElementById('floatingMusicBtn');

    function playFabAudio() {
        if (isPlaying) return; // Jangan tumpuk jika Special Playlist sedang berputar
        getAudioContext();
        const p = fabAudio.play();
        if (p !== undefined) {
            p.then(() => {
                fabPlaying = true;
                if (floatingMusicBtn) floatingMusicBtn.classList.add('playing');
            }).catch(() => {
                fabPlaying = false;
                // Jika browser memblokir sebelum interaksi, siapkan trigger pada interaksi pertama
                const onFirstInteraction = () => {
                    if (!isPlaying && !fabPlaying) {
                        fabAudio.play().then(() => {
                            fabPlaying = true;
                            if (floatingMusicBtn) floatingMusicBtn.classList.add('playing');
                        }).catch(() => { });
                    }
                    ['click', 'touchstart', 'keydown', 'scroll', 'pointerdown'].forEach(evt => {
                        window.removeEventListener(evt, onFirstInteraction, true);
                    });
                };
                ['click', 'touchstart', 'keydown', 'scroll', 'pointerdown'].forEach(evt => {
                    window.addEventListener(evt, onFirstInteraction, { once: true, capture: true, passive: true });
                });
            });
        }
    }

    function stopFabAudio() {
        fabPlaying = false;
        fabAudio.pause();
        if (floatingMusicBtn) floatingMusicBtn.classList.remove('playing');
    }

    fabAudio.addEventListener('play', () => {
        fabPlaying = true;
        if (floatingMusicBtn) floatingMusicBtn.classList.add('playing');
    });

    fabAudio.addEventListener('pause', () => {
        fabPlaying = false;
        if (floatingMusicBtn) floatingMusicBtn.classList.remove('playing');
    });


    // ======================================================================
    // 2. LOADING SCREEN FLOW
    // ======================================================================
    const loadingScreen = document.getElementById('loading-screen');
    const pinScreen = document.getElementById('pin-screen');
    const giftboxScreen = document.getElementById('giftbox-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transform = 'scale(1.05)';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                if (pinScreen) {
                    pinScreen.classList.remove('hidden');
                }
            }, 700);
        }
    }, 1800);


    // ======================================================================
    // 3. PIN PASSCODE SCREEN LOGIC
    // ======================================================================
    let currentPin = '';
    const pinDots = [
        document.getElementById('dot-0'),
        document.getElementById('dot-1'),
        document.getElementById('dot-2'),
        document.getElementById('dot-3'),
        document.getElementById('dot-4'),
        document.getElementById('dot-5')
    ];
    const pinError = document.getElementById('pinError');
    const pinKeys = document.querySelectorAll('.pin-key[data-digit]');
    const pinClearBtn = document.getElementById('pinClearBtn');
    const pinSubmitBtn = document.getElementById('pinSubmitBtn');

    function updatePinDisplay() {
        pinDots.forEach((dot, index) => {
            if (index < currentPin.length) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
                dot.classList.remove('error');
            }
        });
    }

    function verifyPin() {
        if (currentPin === CONFIG.PIN) {
            // ✅ Kode benar!
            pinDots.forEach(dot => {
                dot.style.background = '#38bdf8';
                dot.style.boxShadow = '0 0 15px #38bdf8';
            });

            playChime(600, 0.2);

            setTimeout(() => {
                pinScreen.style.opacity = '0';
                pinScreen.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    pinScreen.classList.add('hidden');
                    if (giftboxScreen) {
                        giftboxScreen.classList.remove('hidden');
                    }
                }, 600);
            }, 400);
        } else {
            // ❌ Kode salah — tampilkan popup lucu
            pinDots.forEach(dot => dot.classList.add('error'));
            playChime(220, 0.25, 'triangle');

            // Tampilkan modal popup
            showWrongPinPopup();

            setTimeout(() => {
                currentPin = '';
                pinDots.forEach(dot => {
                    dot.classList.remove('error');
                    dot.style.background = '';
                    dot.style.boxShadow = '';
                });
                updatePinDisplay();
            }, 800);
        }
    }

    function showWrongPinPopup() {
        // Buat overlay popup jika belum ada
        let popup = document.getElementById('wrongPinPopup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'wrongPinPopup';
            popup.style.cssText = [
                'position:fixed', 'inset:0', 'z-index:9999',
                'display:flex', 'align-items:center', 'justify-content:center',
                'background:rgba(0,0,30,0.75)', 'backdrop-filter:blur(8px)',
                'opacity:0', 'transition:opacity 0.35s ease'
            ].join(';');

            popup.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
                    border: 1.5px solid rgba(56,189,248,0.4);
                    border-radius: 24px;
                    padding: 40px 36px 32px;
                    max-width: 320px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 0 60px rgba(56,189,248,0.2), 0 20px 60px rgba(0,0,0,0.5);
                    transform: scale(0.85);
                    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
                " id="wrongPinCard">
                    <div style="font-size:52px;margin-bottom:16px;">😢</div>
                    <p style="
                        font-family:'Outfit',sans-serif;
                        color:#e2f0fb;
                        font-size:1.1rem;
                        line-height:1.6;
                        margin:0 0 28px;
                        font-weight:500;
                    ">Kamu lupa tanggal jadian kita, yaa?!</p>
                    <button id="wrongPinOkBtn" style="
                        background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                        color:#fff;
                        border:none;
                        border-radius:50px;
                        padding:12px 36px;
                        font-family:'Outfit',sans-serif;
                        font-size:0.95rem;
                        font-weight:600;
                        cursor:pointer;
                        letter-spacing:0.5px;
                        box-shadow: 0 4px 20px rgba(56,189,248,0.4);
                        transition: transform 0.15s, box-shadow 0.15s;
                    ">Coba Lagi</button>
                </div>
            `;

            document.body.appendChild(popup);

            popup.querySelector('#wrongPinOkBtn').addEventListener('mouseenter', e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 28px rgba(56,189,248,0.6)';
            });
            popup.querySelector('#wrongPinOkBtn').addEventListener('mouseleave', e => {
                e.target.style.transform = '';
                e.target.style.boxShadow = '0 4px 20px rgba(56,189,248,0.4)';
            });
            popup.querySelector('#wrongPinOkBtn').addEventListener('click', () => closeWrongPinPopup(popup));
            popup.addEventListener('click', e => { if (e.target === popup) closeWrongPinPopup(popup); });
        }

        // Animasi masuk
        requestAnimationFrame(() => {
            popup.style.display = 'flex';
            requestAnimationFrame(() => {
                popup.style.opacity = '1';
                const card = popup.querySelector('#wrongPinCard');
                if (card) card.style.transform = 'scale(1)';
            });
        });
    }

    function closeWrongPinPopup(popup) {
        popup.style.opacity = '0';
        const card = popup.querySelector('#wrongPinCard');
        if (card) card.style.transform = 'scale(0.85)';
        setTimeout(() => { popup.style.display = 'none'; }, 350);
    }

    pinKeys.forEach(key => {
        key.addEventListener('click', () => {
            const digit = key.getAttribute('data-digit');
            if (currentPin.length < 6) {
                currentPin += digit;
                updatePinDisplay();
                playChime(440 + currentPin.length * 50, 0.08);

                if (currentPin.length === 6) {
                    setTimeout(verifyPin, 250);
                }
            }
        });
    });

    if (pinClearBtn) {
        pinClearBtn.addEventListener('click', () => {
            currentPin = '';
            if (pinError) pinError.classList.add('hidden');
            updatePinDisplay();
            playChime(300, 0.08);
        });
    }

    if (pinSubmitBtn) {
        pinSubmitBtn.addEventListener('click', () => {
            // If empty, auto-fill correct PIN as a sweet helper
            if (currentPin.length === 0) {
                currentPin = CONFIG.PIN;
                updatePinDisplay();
            }
            verifyPin();
        });
    }


    // ======================================================================
    // 4. 3D GIFT BOX INTERACTION
    // ======================================================================
    const giftboxContainer = document.getElementById('giftboxContainer');
    const giftbox = document.getElementById('giftbox');
    const giftRays = document.getElementById('giftRays');
    let isGiftOpened = false;

    if (giftboxContainer) {
        giftboxContainer.addEventListener('click', () => {
            if (isGiftOpened) return;
            isGiftOpened = true;

            // Animate open
            giftbox.classList.add('opened');
            if (giftRays) giftRays.classList.add('active');

            // Play celebratory chime chord
            playCelebrationChord();

            // Transition to Main Content
            setTimeout(() => {
                giftboxScreen.style.opacity = '0';
                giftboxScreen.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    giftboxScreen.classList.add('hidden');
                    if (mainContent) {
                        mainContent.classList.remove('hidden');
                        mainContent.style.opacity = '0';
                        setTimeout(() => {
                            mainContent.style.opacity = '1';
                        }, 50);
                    }
                    startTypewriter();

                    // 🎶 Auto-play lagu "Besok Kita Pergi Makan" begitu masuk halaman Happy Birthday Special One!
                    playFabAudio();
                }, 800);
            }, 1200);
        });
    }

    // Pastikan lagu berputar jika user berada di main-content / saat berinteraksi di halaman ini
    if (mainContent) {
        const ensureFabPlayingOnMain = () => {
            if (!isPlaying && fabAudio.paused) {
                playFabAudio();
            }
        };
        ['click', 'touchstart', 'scroll', 'pointerdown'].forEach(evt => {
            mainContent.addEventListener(evt, ensureFabPlayingOnMain, { passive: true });
        });
        window.addEventListener('scroll', ensureFabPlayingOnMain, { passive: true });
    }


    // ======================================================================
    // 5. HERO TYPEWRITER ANIMATION
    // ======================================================================
    const typewriterEl = document.getElementById('heroTypewriter');
    let typeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterTimeout;

    function startTypewriter() {
        if (!typewriterEl) return;
        const currentText = CONFIG.TYPEWRITER_TEXTS[typeIndex % CONFIG.TYPEWRITER_TEXTS.length];

        if (!isDeleting) {
            typewriterEl.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                typewriterTimeout = setTimeout(startTypewriter, 2200);
                return;
            }
            typewriterTimeout = setTimeout(startTypewriter, 70);
        } else {
            typewriterEl.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                typeIndex++;
                typewriterTimeout = setTimeout(startTypewriter, 500);
                return;
            }
            typewriterTimeout = setTimeout(startTypewriter, 35);
        }
    }


    // ======================================================================
    // 6. A DIGITAL BOUQUET INTERACTION
    // ======================================================================
    const bouquetFlowersContainer = document.getElementById('bouquetFlowers');
    const bouquetCardEmoji = document.getElementById('bouquetCardEmoji');
    const bouquetCardText = document.getElementById('bouquetCardText');

    if (bouquetFlowersContainer) {
        CONFIG.BOUQUET_FLOWERS.forEach((flower, index) => {
            const flowerEl = document.createElement('div');
            flowerEl.className = 'bouquet-flower-item';
            flowerEl.textContent = flower.emoji;
            flowerEl.style.left = `calc(${flower.left}% - 27px)`;
            flowerEl.style.top = `${flower.top}px`;
            flowerEl.style.animationDelay = `${index * 0.3}s`;

            flowerEl.addEventListener('click', () => {
                document.querySelectorAll('.bouquet-flower-item').forEach(f => f.classList.remove('active'));
                flowerEl.classList.add('active');

                if (bouquetCardEmoji) bouquetCardEmoji.textContent = flower.emoji;
                if (bouquetCardText) {
                    bouquetCardText.style.opacity = '0';
                    setTimeout(() => {
                        bouquetCardText.textContent = flower.msg;
                        bouquetCardText.style.opacity = '1';
                    }, 150);
                }

                playChime(520 + index * 60, 0.15);
            });

            bouquetFlowersContainer.appendChild(flowerEl);
        });
    }


    // ======================================================================
    // 7. PHOTO MEMORIES (POLAROID) & LIGHTBOX MODAL
    // ======================================================================
    const polaroidGrid = document.getElementById('polaroidGrid');
    const photoLightbox = document.getElementById('photoLightbox');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxImgWrap = document.getElementById('lightboxImgWrap');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (polaroidGrid) {
        CONFIG.POLAROIDS.forEach((photo) => {
            const card = document.createElement('div');
            card.className = 'polaroid-card';
            card.style.transform = `rotate(${photo.rotate}deg)`;

            card.innerHTML = `
                <div class="polaroid-tape"></div>
                <div class="polaroid-photo-frame">
                    <img class="polaroid-img" src="${photo.imgUrl}" alt="${photo.location}" loading="lazy">
                </div>
                <div class="polaroid-info">
                    <span class="polaroid-loc">📍 ${photo.location}</span>
                    <p class="polaroid-caption">"${photo.caption}"</p>
                </div>
            `;

            card.addEventListener('click', () => {
                if (lightboxImgWrap) {
                    lightboxImgWrap.innerHTML = `<img src="${photo.imgUrl}" alt="${photo.location}">`;
                }
                if (lightboxCaption) {
                    lightboxCaption.innerHTML = `
                        <span class="lightbox-loc">📍 ${photo.location}</span>
                        <p class="lightbox-quote">"${photo.caption}"</p>
                    `;
                }
                if (photoLightbox) {
                    photoLightbox.classList.remove('hidden');
                }
                playChime(480, 0.1);
            });

            polaroidGrid.appendChild(card);
        });
    }

    function closeLightbox() {
        if (photoLightbox) photoLightbox.classList.add('hidden');
    }

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);


    // ======================================================================
    // 8. SPECIAL PLAYLIST VINYL PLAYER
    // ======================================================================
    // ── HTML5 Audio Player (file lokal MP3) ────────────────────────
    let htmlAudio = new Audio();
    let currentTrackIdx = 0;
    let trackProgress = 0;
    let scrubberInterval = null;

    // Auto-advance ke lagu berikutnya saat selesai
    htmlAudio.addEventListener('ended', () => {
        currentTrackIdx = (currentTrackIdx + 1) % CONFIG.PLAYLIST.length;
        selectTrack(currentTrackIdx);
        playAudio();
    });

    // Sinkronisasi progress scrubber dengan posisi audio nyata
    htmlAudio.addEventListener('timeupdate', () => {
        trackProgress = Math.floor(htmlAudio.currentTime);
        updateScrubberUI();
    });

    htmlAudio.addEventListener('loadedmetadata', () => {
        updateScrubberUI();
    });

    function playAudio() {
        const song = CONFIG.PLAYLIST[currentTrackIdx];
        if (htmlAudio.src !== song.localFile && !htmlAudio.src.endsWith(song.localFile)) {
            htmlAudio.src = song.localFile;
            htmlAudio.load();
        }
        htmlAudio.play().catch(() => {
            // Autoplay blocked – user akan tekan play lagi
        });
    }

    function pauseAudio() {
        htmlAudio.pause();
    }

    // Player DOM Elements
    const vinylDisc = document.getElementById('vinylDisc');
    const btnPlay = document.getElementById('btnPlay');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const iconPlay = btnPlay ? btnPlay.querySelector('.icon-play') : null;
    const iconPause = btnPlay ? btnPlay.querySelector('.icon-pause') : null;
    const songTitle = document.getElementById('songTitle');
    const songArtist = document.getElementById('songArtist');
    const scrubFill = document.getElementById('scrubFill');
    const scrubThumb = document.getElementById('scrubThumb');
    const currTimeEl = document.getElementById('currTime');
    const durTimeEl = document.getElementById('durTime');
    const scrubBar = document.getElementById('scrubBar');
    const playlistItemsContainer = document.getElementById('playlistItems');

    function formatTime(secs) {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function renderPlaylist() {
        if (!playlistItemsContainer) return;
        playlistItemsContainer.innerHTML = '';

        CONFIG.PLAYLIST.forEach((song, idx) => {
            const row = document.createElement('div');
            row.className = `track-row ${idx === currentTrackIdx ? 'active' : ''}`;
            row.setAttribute('data-index', idx);

            row.innerHTML = `
                <span class="track-num">${idx + 1}</span>
                <div class="track-text">
                    <div class="track-name">${song.name}</div>
                    <div class="track-sub">${song.artist}</div>
                </div>
                <div class="track-icon">🎵</div>
            `;

            row.addEventListener('click', () => {
                selectTrack(idx);
                // Matikan lagu "Besok Kita Pergi Makan" ketika lagu playlist diklik
                stopFabAudio();

                // Langsung putar lagu playlist
                isPlaying = true;
                if (iconPlay) iconPlay.classList.add('hidden');
                if (iconPause) iconPause.classList.remove('hidden');
                if (vinylDisc) vinylDisc.classList.add('playing');
                playAudio();
            });

            playlistItemsContainer.appendChild(row);
        });
    }

    function selectTrack(idx) {
        currentTrackIdx = idx;
        const song = CONFIG.PLAYLIST[currentTrackIdx];
        if (songTitle) songTitle.textContent = song.name;
        if (songArtist) songArtist.textContent = song.artist;
        if (durTimeEl) durTimeEl.textContent = song.duration;

        // Ganti sumber audio ke file lokal
        htmlAudio.src = song.localFile;
        htmlAudio.load();
        trackProgress = 0;
        updateScrubberUI();
        renderPlaylist();
    }

    function parseDuration(durStr) {
        if (!durStr) return 200;
        const p = durStr.split(':');
        return p.length === 2 ? parseInt(p[0], 10) * 60 + parseInt(p[1], 10) : 200;
    }

    function updateScrubberUI() {
        const song = CONFIG.PLAYLIST[currentTrackIdx];
        const defaultSecs = song ? parseDuration(song.duration) : 200;
        const total = (htmlAudio.duration && !isNaN(htmlAudio.duration) && htmlAudio.duration > 0)
            ? htmlAudio.duration
            : defaultSecs;
        const pct = total > 0 ? (trackProgress / total) * 100 : 0;
        if (scrubFill) scrubFill.style.width = `${pct}%`;
        if (scrubThumb) scrubThumb.style.left = `${pct}%`;
        if (currTimeEl) currTimeEl.textContent = formatTime(trackProgress);
        if (durTimeEl) {
            durTimeEl.textContent = (htmlAudio.duration && !isNaN(htmlAudio.duration) && htmlAudio.duration > 0)
                ? formatTime(htmlAudio.duration)
                : (song ? song.duration : formatTime(total));
        }
    }

    function togglePlay() {
        getAudioContext(); // aktifkan AudioContext untuk chime
        isPlaying = !isPlaying;

        if (isPlaying) {
            // Matikan lagu "Besok Kita Pergi Makan" jika vinyl player dinyalakan
            stopFabAudio();
            if (iconPlay) iconPlay.classList.add('hidden');
            if (iconPause) iconPause.classList.remove('hidden');
            if (vinylDisc) vinylDisc.classList.add('playing');
            playAudio();
        } else {
            if (iconPlay) iconPlay.classList.remove('hidden');
            if (iconPause) iconPause.classList.add('hidden');
            if (vinylDisc) vinylDisc.classList.remove('playing');
            pauseAudio();
        }
    }

    if (btnPlay) btnPlay.addEventListener('click', togglePlay);

    if (floatingMusicBtn) {
        floatingMusicBtn.addEventListener('click', () => {
            getAudioContext();
            if (fabPlaying) {
                stopFabAudio();
            } else {
                // Jika playlist sedang berjalan, pause dulu
                if (isPlaying) {
                    isPlaying = false;
                    if (iconPlay) iconPlay.classList.remove('hidden');
                    if (iconPause) iconPause.classList.add('hidden');
                    if (vinylDisc) vinylDisc.classList.remove('playing');
                    pauseAudio();
                }
                playFabAudio();
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            currentTrackIdx = (currentTrackIdx + 1) % CONFIG.PLAYLIST.length;
            selectTrack(currentTrackIdx);
            if (isPlaying) {
                stopFabAudio();
                playAudio();
            }
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            currentTrackIdx = (currentTrackIdx - 1 + CONFIG.PLAYLIST.length) % CONFIG.PLAYLIST.length;
            selectTrack(currentTrackIdx);
            if (isPlaying) {
                stopFabAudio();
                playAudio();
            }
        });
    }

    if (scrubBar) {
        scrubBar.addEventListener('click', (e) => {
            const rect = scrubBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = Math.max(0, Math.min(1, clickX / rect.width));
            const song = CONFIG.PLAYLIST[currentTrackIdx];
            const defaultSecs = song ? parseDuration(song.duration) : 200;
            const duration = (htmlAudio.duration && !isNaN(htmlAudio.duration) && htmlAudio.duration > 0)
                ? htmlAudio.duration
                : defaultSecs;
            htmlAudio.currentTime = pct * duration;
            trackProgress = Math.floor(htmlAudio.currentTime);
            updateScrubberUI();
        });
    }

    renderPlaylist();
    selectTrack(0);

    // Auto-play lagu "Besok Kita Pergi Makan" begitu masuk halaman
    playFabAudio();


    // ======================================================================
    // 9. THE REASONS JAR & POP-UP STATIONERY MODAL
    // ======================================================================
    const glassJar = document.getElementById('glassJar');
    const shakeJarBtn = document.getElementById('shakeJarBtn');
    const noteModal = document.getElementById('noteModal');
    const noteCard = document.getElementById('noteCard');
    const closeNoteBtn = document.getElementById('closeNoteBtn');
    const noteNum = document.getElementById('noteNum');
    const noteQuote = document.getElementById('noteQuote');

    function triggerJarShake() {
        if (glassJar) glassJar.classList.add('shaking');
        playChime(350, 0.15);

        setTimeout(() => {
            if (glassJar) glassJar.classList.remove('shaking');

            // Pick random reason
            const randomIndex = Math.floor(Math.random() * CONFIG.REASONS.length);
            const quote = CONFIG.REASONS[randomIndex];

            if (noteNum) noteNum.textContent = `#${randomIndex + 1}`;
            if (noteQuote) noteQuote.textContent = quote;

            if (noteModal) {
                noteModal.classList.remove('hidden');
                playCelebrationChord();
            }
        }, 600);
    }

    if (glassJar) glassJar.addEventListener('click', triggerJarShake);
    if (shakeJarBtn) shakeJarBtn.addEventListener('click', triggerJarShake);

    if (closeNoteBtn) {
        closeNoteBtn.addEventListener('click', () => {
            if (noteModal) noteModal.classList.add('hidden');
        });
    }

    if (noteModal) {
        noteModal.addEventListener('click', (e) => {
            if (e.target === noteModal) {
                noteModal.classList.add('hidden');
            }
        });
    }


    // ======================================================================
    // 10. FIREWORKS CANVAS & CELEBRATION MODAL
    // ======================================================================
    const celebrateBtn = document.getElementById('celebrateBtn');
    const fireworksOverlay = document.getElementById('fireworksOverlay') || document.getElementById('fireworks-overlay');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const celebCloseBtn = document.getElementById('celebCloseBtn');
    let fwCtx = null;
    let fwParticles = [];
    let fwActive = false;

    if (fireworksCanvas) {
        fwCtx = fireworksCanvas.getContext('2d');
    }

    function resizeFireworks() {
        if (fireworksCanvas) {
            fireworksCanvas.width = window.innerWidth;
            fireworksCanvas.height = window.innerHeight;
        }
    }
    window.addEventListener('resize', resizeFireworks);

    class FireworkParticle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 1.5;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.015;
            this.gravity = 0.08;
        }

        update() {
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.alpha);
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    function spawnFireworkBurst() {
        if (!fireworksCanvas) return;
        const x = Math.random() * (fireworksCanvas.width * 0.7) + fireworksCanvas.width * 0.15;
        const y = Math.random() * (fireworksCanvas.height * 0.5) + fireworksCanvas.height * 0.1;
        const colors = ['#38bdf8', '#0ea5e9', '#e0f2fe', '#fde047', '#60a5fa'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 40; i++) {
            fwParticles.push(new FireworkParticle(x, y, color));
        }
    }

    function animateFireworks() {
        if (!fwActive || !fwCtx) return;
        fwCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

        if (Math.random() < 0.1) {
            spawnFireworkBurst();
        }

        for (let i = fwParticles.length - 1; i >= 0; i--) {
            const p = fwParticles[i];
            p.update();
            p.draw(fwCtx);
            if (p.alpha <= 0) {
                fwParticles.splice(i, 1);
            }
        }

        requestAnimationFrame(animateFireworks);
    }

    const celebRejectBtn = document.getElementById('celebRejectBtn');
    const celebActions = document.querySelector('.celeb-actions');
    let rejectCount = 0;
    let isSurrendered = false;
    let lastDodgeTime = 0;
    const initialRejectText = celebRejectBtn ? celebRejectBtn.textContent.trim() : 'Gamau';

    function playDodgeBeep() {
        try {
            const ctx = window._audioCtx || new (window.AudioContext || window.webkitAudioContext)();
            window._audioCtx = ctx;
            if (ctx.state === 'suspended') ctx.resume();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const startF = 450 + Math.min(rejectCount * 30, 400);
            osc.frequency.setValueAtTime(startF, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(startF + 250, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch (e) {
            // fallback silent
        }
    }

    function resetCelebModal() {
        rejectCount = 0;
        isSurrendered = false;
        if (celebActions) {
            celebActions.classList.remove('swapped', 'anim-swap');
        }
        if (celebRejectBtn) {
            celebRejectBtn.textContent = initialRejectText;
        }
        const celebSub = document.querySelector('.celeb-sub');
        if (celebSub) {
            celebSub.textContent = 'Besok pergi mam sama aku, yuk';
            celebSub.style.color = '';
        }
    }

    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', () => {
            resetCelebModal();
            resizeFireworks();
            if (fireworksOverlay) fireworksOverlay.classList.remove('hidden');
            fwActive = true;
            fwParticles = [];
            spawnFireworkBurst();
            spawnFireworkBurst();
            animateFireworks();
            playCelebrationChord();
        });
    }

    if (celebCloseBtn) {
        celebCloseBtn.addEventListener('click', () => {
            fwActive = false;
            if (fireworksOverlay) fireworksOverlay.classList.add('hidden');
            resetCelebModal();
        });
    }

    const dodgeTeases = [
        'Eits gabisa nolak yaa, wajib ikut',
        'Masih mau nolak juga nih?',
        'Gabisa diklik kan? Hahaha',
        'Tombolnya lincah banget yaa?',
        'Masih berusaha nolak ternyata',
        'Pantang menyerah banget yaa kamu',
        'Gak bakal kena wlee',
        'Tetep gabisa nolak pokoknya!',
        'Udah klik "Ayo" aja sayang'
    ];

    if (celebRejectBtn) {
        const handleDodge = (e) => {
            if (isSurrendered) return;

            const now = Date.now();
            if (now - lastDodgeTime < 180) return; // prevent rapid duplicate triggers
            lastDodgeTime = now;

            rejectCount++;
            playDodgeBeep();

            if (celebActions) {
                celebActions.classList.toggle('swapped');
                celebActions.classList.remove('anim-swap');
                void celebActions.offsetWidth; // force reflow
                celebActions.classList.add('anim-swap');
            }

            const celebSub = document.querySelector('.celeb-sub');
            if (celebSub) {
                if (rejectCount >= 10) {
                    isSurrendered = true;
                    celebRejectBtn.textContent = 'Mau dehh';
                    celebSub.textContent = 'Nah gitu dong, besok kita pergi mam, yaa';
                    celebSub.style.color = '#7dd3fc';
                } else {
                    const tease = dodgeTeases[(rejectCount - 1) % dodgeTeases.length];
                    celebSub.textContent = tease;
                    celebSub.style.color = '#38bdf8';
                }
            }
        };

        // Desktop mouse hover
        celebRejectBtn.addEventListener('mouseenter', handleDodge);

        // Mobile touch / pointer down
        celebRejectBtn.addEventListener('pointerdown', (e) => {
            if (!isSurrendered) {
                e.preventDefault();
                e.stopPropagation();
                handleDodge(e);
            }
        });

        // Click handler (for surrender state or keyboard navigation)
        celebRejectBtn.addEventListener('click', (e) => {
            if (isSurrendered) {
                fwActive = false;
                if (fireworksOverlay) fireworksOverlay.classList.add('hidden');
                resetCelebModal();
            } else {
                e.preventDefault();
                e.stopPropagation();
                handleDodge(e);
            }
        });
    }


    // ======================================================================
    // 11. SCROLL PROGRESS BAR
    // ======================================================================
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0 && scrollProgressBar) {
            const progress = (scrollTop / docHeight) * 100;
            scrollProgressBar.style.width = `${progress}%`;
        }
    });

});
