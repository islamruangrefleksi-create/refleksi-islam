// Fungsi untuk membuka/menutup menu di perangkat mobile
function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

function initQuoteRotator() {
    const quoteBtn = document.getElementById("newQuoteBtn");
    const quoteText = document.querySelector(".quote-text");
    if (!quoteBtn || !quoteText) return;

    const quotes = [
        "Ketika ketenangan hadir, hati menjadi terang. Biarkan iman membimbing setiap langkah.",
        "Doa yang tulus adalah nafas bagi jiwa. Dengan tawakal, setiap beban menjadi ringan.",
        "Syukur adalah kunci kebahagiaan. Lihatlah apa yang sudah Allah beri, bukan apa yang belum kau miliki.",
        "Kebaikan kecil yang konsisten akan mengubah hidup. Jadikan setiap hari kesempatan untuk mendekat pada-Nya."
    ];
    let currentIndex = 0;

    quoteBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % quotes.length;
        quoteText.textContent = `“${quotes[currentIndex]}”`;
    });
}

function initProphetDetailPage() {
    const detailTitle = document.getElementById('prophet-name');
    const detailSubtitle = document.getElementById('prophet-subtitle');
    const detailDescription = document.getElementById('prophet-description');
    if (!detailTitle || !detailSubtitle || !detailDescription) return;

    const params = new URLSearchParams(window.location.search);
    const key = params.get('name');
    const prophet = prophetData[key];

    if (!prophet) {
        detailTitle.textContent = 'Nabi Tidak Ditemukan';
        detailSubtitle.textContent = 'Maaf, halaman untuk nabi ini tidak tersedia.';
        detailDescription.innerHTML = '<p>Silakan kembali ke daftar nabi untuk memilih kisah lainnya.</p>';
        return;
    }

    detailTitle.textContent = prophet.title;
    detailSubtitle.textContent = prophet.subtitle;
    detailDescription.innerHTML = prophet.paragraphs.map(text => `<p>${text}</p>`).join('');
}

const prophetData = {
    adam: {
        title: 'Nabi Adam AS',
        subtitle: 'Manusia pertama dan nabi pertama yang diutus Allah SWT.',
        paragraphs: [
            'Nabi Adam AS diciptakan langsung oleh Allah dari tanah liat. Beliau adalah manusia pertama dan bapak seluruh umat manusia.',
            'Allah mengajarkan Adam nama-nama segala sesuatu dan memerintahkan para malaikat untuk sujud kepadanya. Adam menerima petunjuk dan hidangan surga, namun kemudian diuji dan diturunkan ke bumi karena kesalahan kecil.',
            'Kisah Nabi Adam mengajarkan bahwa manusia berasal dari Allah, punya tugas sebagai khalifah, dan selalu bisa bertaubat jika kembali kepada-Nya.'
        ]
    },
    idris: {
        title: 'Nabi Idris AS',
        subtitle: 'Nabi yang dikenal sabar, bijaksana, dan pelopor tulisan.',
        paragraphs: [
            'Nabi Idris AS adalah salah satu nabi awal yang hidup dengan penuh ketakwaan. Beliau terkenal sebagai orang pertama yang menulis dengan pena.',
            'Idris mengajak kaumnya untuk mengenal Allah lebih dalam dan menjauhi kesalahan. Kisahnya memberi teladan tentang pentingnya ilmu dan kesabaran.',
            'Meskipun hidupnya lebih dulu dari civitas manusia umum, beliau tetap menjadi contoh bahwa ketaatan kepada Allah adalah inti dakwah nabi.'
        ]
    },
    nuh: {
        title: 'Nabi Nuh AS',
        subtitle: 'Nabi yang membangun bahtera keselamatan saat banjir besar.',
        paragraphs: [
            'Nabi Nuh AS diutus kepada kaumnya yang tenggelam dalam kesesatan. Beliau menyeru mereka berulang kali untuk kembali kepada Allah dan berhenti dari kemungkaran.',
            'Karena kaum Nuh terus menolak, Allah memerintahkan Nuh membangun kapal besar. Hanya orang-orang beriman yang selamat di atas bahtera ketika banjir melanda dunia.',
            'Kisah ini mengajarkan tentang kesabaran, keteguhan iman, dan bahwa Allah akan menolong hamba-Nya yang teguh dalam kebenaran.'
        ]
    },
    hud: {
        title: 'Nabi Hud AS',
        subtitle: "Nabi yang diutus kepada kaum 'Ad yang angkuh.",
        paragraphs: [
            "Nabi Hud AS berdakwah kepada kaum 'Ad yang kaya raya namun sombong dan musyrik. Beliau menyeru mereka untuk menyembah Allah saja dan meninggalkan berhala.",
            "Kaum 'Ad menolak dan menganggap Hud sebagai orang gila. Akhirnya Allah menimpakan azab angin kencang yang menghancurkan mereka.",
            'Dari Nabi Hud kita belajar bahwa keteguhan berdakwah penting, dan bahwa kesombongan terhadap Allah akan berakhir dengan kehancuran.'
        ]
    },
    shaleh: {
        title: 'Nabi Shaleh AS',
        subtitle: 'Nabi yang membawa mukjizat unta betina untuk kaum Tsamud.',
        paragraphs: [
            'Nabi Shaleh AS diutus kepada kaum Tsamud, yang hidup di antara batu-batuan besar namun tetap menolak kebenaran.',
            'Allah memberi beliau mukjizat berupa unta betina yang keluar dari batu. Unta itu menjadi tanda bagi kaum Tsamud untuk beriman.',
            'Ketika mereka menzalimi unta tersebut, Allah menurunkan azab yang menghancurkan kaum Tsamud. Pelajarannya adalah bahwa mukjizat tidak akan berguna jika hati masih tertutup.'
        ]
    },
    ibrahim: {
        title: 'Nabi Ibrahim AS',
        subtitle: 'Bapak para nabi dan teladan pengorbanan dalam iman.',
        paragraphs: [
            'Nabi Ibrahim AS adalah bapak para nabi, dikenal karena keteguhan imannya dan usahanya menegakkan tauhid.',
            'Beliau diuji dengan berbagai cobaan, termasuk perintah untuk mengorbankan putranya Ismail. Iman Ibrahim tetap teguh dan Allah menggantinya dengan qurban yang besar.',
            'Kisahnya mengajarkan tentang kepercayaan penuh kepada Allah, keberanian melawan tradisi yang salah, dan pentingnya ketaatan total.'
        ]
    },
    luth: {
        title: 'Nabi Luth AS',
        subtitle: 'Nabi yang menyeru kaumnya untuk meninggalkan perbuatan keji.',
        paragraphs: [
            'Nabi Luth AS diutus kepada kaum Sodom dan Gomorah yang melakukan kejahatan moral. Beliau menyeru mereka untuk hidup bersih dan menghormati keluarga.',
            'Kaum Luth malah menolak dan mengusir para tamu yang beriman. Karena kedurhakaan mereka, Allah menurunkan azab dahsyat.',
            'Dari Nabi Luth kita belajar bahwa menjaga moral dan kehormatan keluarga adalah bagian penting dari keimanan.'
        ]
    },
    ismail: {
        title: 'Nabi Ismail AS',
        subtitle: 'Putra taat Nabi Ibrahim dalam ujian iman terbesar.',
        paragraphs: [
            'Nabi Ismail AS adalah anak yang sangat taat kepada Allah dan ayahnya, Ibrahim. Ketika diuji dengan perintah hampir dikorbankan, beliau bersikap tawakal.',
            'Allah mengganti pengorbanan tersebut dengan hewan qurban, sebagai bukti iman mereka berdua.',
            'Kisah Ismail mengajarkan bahwa ketaatan kepada Allah dan ketegaran dalam ujian adalah nilai utama seorang mukmin.'
        ]
    },
    ishaq: {
        title: 'Nabi Ishaq AS',
        subtitle: 'Putra Nabi Ibrahim yang menjadi nenek moyang Bani Israil.',
        paragraphs: [
            'Nabi Ishaq AS lahir dari Sarah dan Ibrahim dalam usia lanjut. Beliau meneruskan dakwah ayahnya dan tetap menjaga keimanan keluarga.',
            'Ishaq dikenal lemah lembut dan penuh kasih sayang, serta menjadi penerus generasi nabi setelah Ibrahim.',
            'Kisahnya mengingatkan bahwa Allah memenuhi janji-Nya kepada hamba-hamba yang sabar dan taat.'
        ]
    },
    yaqub: {
        title: 'Nabi Yaqub AS',
        subtitle: 'Ayah Nabi Yusuf yang terkenal dengan kesabaran dan keteguhannya.',
        paragraphs: [
            'Nabi Yaqub AS mengalami banyak kehilangan ketika anak-anaknya berpaling dan Yusuf dijual oleh saudaranya.',
            'Meski hancur hati, beliau tetap bersabar dan yakin kepada Allah. Akhirnya beliau bersatu kembali dengan Yusuf di Mesir.',
            'Kisah Yaqub mengajarkan bahwa doa dan kesabaran dapat menyembuhkan luka yang paling dalam.'
        ]
    },
    yusuf: {
        title: 'Nabi Yusuf AS',
        subtitle: 'Nabi yang ujian hidupnya mengajarkan kesabaran dan pengampunan.',
        paragraphs: [
            'Nabi Yusuf AS dijual oleh saudara-saudaranya ke Mesir, lalu difitnah, dan ditahan di penjara. Meski begitu, ia tetap menjaga akhlak dan imannya.',
            'Berkat ketulusan dan ketabahannya, Allah memberinya posisi terhormat di Mesir dan mempertemukannya kembali dengan keluarga.',
            'Belajar dari Yusuf berarti percaya bahwa Allah bisa mengubah ujian menjadi jalan keselamatan bila kita sabar dan jujur.'
        ]
    },
    syuaib: {
        title: "Nabi Syu'aib AS",
        subtitle: 'Nabi yang menyeru kaum Madyan untuk adil dan jujur.',
        paragraphs: [
            "Nabi Syu'aib AS diutus kepada kaum Madyan yang menipu dalam timbangan dan mengambil hak orang lain.",
            'Beliau mengajak mereka menghentikan penipuan dan beribadah kepada Allah saja, tetapi banyak yang tetap menolak.',
            "Kisah Syu'aib mengingatkan bahwa keadilan dan kejujuran adalah nilai yang dituntut dalam agama dan kehidupan sosial."
        ]
    },
    ayyub: {
        title: 'Nabi Ayyub AS',
        subtitle: 'Contoh kesabaran luar biasa di tengah penyakit dan kehilangan.',
        paragraphs: [
            'Nabi Ayyub AS diuji oleh Allah dengan penyakit, kehilangan harta, dan kesendirian. Meski begitu, beliau tidak pernah kehilangan iman.',
            'Beliau berdoa kepada Allah dengan penuh harap dan akhirnya disembuhkan setelah ujian panjang.',
            'Kisah Ayyub menunjukkan bahwa kesabaran dalam penderitaan mendapat ganjaran dan Allah Maha Penyayang terhadap hamba-Nya.'
        ]
    },
    musa: {
        title: 'Nabi Musa AS',
        subtitle: "Penghancur tirani Fir'aun dan pembawa perintah Allah.",
        paragraphs: [
            'Nabi Musa AS dipilih Allah untuk membebaskan Bani Israil dari perbudakan Mesir dan menegakkan kebenaran.',
            'Beliau menerima wahyu Taurat dan menunjukkan mukjizat tongkat yang berubah menjadi ular serta membelah laut.',
            'Kisah Musa mengajarkan bahwa Allah selalu bersama mereka yang berusaha membela keadilan dan tunduk kepada-Nya.'
        ]
    },
    harun: {
        title: 'Nabi Harun AS',
        subtitle: 'Pendamping dan pembantu Nabi Musa dalam dakwah.',
        paragraphs: [
            "Nabi Harun AS membantu saudaranya Musa dalam menyampaikan ajaran Allah kepada Fir'aun dan kaumnya.",
            'Beliau dikenal dengan kelembutan dan kebijaksanaannya, serta berperan sebagai penengah ketika Musa sering pergi ke gunung.',
            'Kisah Harun mengajarkan pentingnya kerja sama dan dukungan dalam menyebarkan kebenaran.'
        ]
    },
    dhulkifli: {
        title: 'Nabi Dzulkifli AS',
        subtitle: 'Nabi yang terkenal dengan keteguhan dan keadilan.',
        paragraphs: [
            'Nabi Dzulkifli AS hidup di lingkungan yang penuh ketidakadilan namun tetap teguh pada prinsip kebenaran.',
            'Beliau dikenal karena kesabarannya dan kemampuannya memimpin dengan adil di tengah masyarakat yang sulit.',
            'Dari Dzulkifli kita belajar bahwa iman dan keadilan harus dijaga walau keadaan sekeliling tidak mendukung.'
        ]
    },
    dawud: {
        title: 'Nabi Dawud AS',
        subtitle: 'Raja nabi yang diberi kitab Zabur dan suara merdu.',
        paragraphs: [
            'Nabi Dawud AS adalah nabi sekaligus raja yang memimpin Bani Israil dengan adil. Allah memberinya kitab Zabur sebagai petunjuk.',
            'Beliau juga diberi kemampuan melunakkan besi, dan suaranya digunakan untuk memuji Allah dengan indah.',
            'Kisah Dawud mengajarkan bahwa pemimpin yang saleh harus menggabungkan kekuatan, kebijaksanaan, dan ibadah.'
        ]
    },
    sulaiman: {
        title: 'Nabi Sulaiman AS',
        subtitle: 'Nabi yang diberi hikmah luar biasa dan kerajaan yang luas.',
        paragraphs: [
            'Nabi Sulaiman AS adalah putra Nabi Dawud. Allah memberinya kemampuan berbicara dengan binatang dan jin, serta kerajaan yang luas.',
            'Beliau menggunakan kebijakannya untuk mengadili dengan benar dan menjaga perdamaian antar umat.',
            'Kisah Sulaiman mencerminkan bahwa nikmat terbesar adalah hikmah, bukan sekadar kekuasaan atau harta.'
        ]
    },
    ilyas: {
        title: 'Nabi Ilyas AS',
        subtitle: 'Nabi yang melawan penyembahan berhala dan mengajak kembali kepada tauhid.',
        paragraphs: [
            'Nabi Ilyas AS diutus kepada kaum Baal yang menyembah berhala dan menolak perintah Allah.',
            'Beliau meneguhkan umat untuk kembali kepada Allah dan memperingatkan mereka tentang azab jika terus menyimpang.',
            'Kisah Ilyas mengajarkan bahwa melawan kesyirikan adalah bagian penting dari dakwah tauhid.'
        ]
    },
    ilyasa: {
        title: 'Nabi Ilyasa AS',
        subtitle: 'Penerus dakwah Nabi Ilyas yang melanjutkan misi tauhid.',
        paragraphs: [
            'Nabi Ilyasa AS meneruskan dakwah Nabi Ilyas setelah beliau dipanggil Allah.',
            'Beliau tetap teguh menyampaikan ajaran Allah meski banyak tantangan dari lingkungan sekitarnya.',
            'Kisah Ilyasa memberi contoh tentang pentingnya kesinambungan dakwah dari satu generasi ke generasi berikutnya.'
        ]
    },
    yunus: {
        title: 'Nabi Yunus AS',
        subtitle: 'Nabi yang mengalami ujian ditelan ikan besar.',
        paragraphs: [
            'Nabi Yunus AS diutus kepada kaum Nuh yang masih tersisa, namun beliau sempat meninggalkan tugasnya karena kecewa dengan penolakan mereka.',
            'Karena itulah beliau ditelan ikan besar. Di dalam perut ikan, ia bertobat dan memohon ampun kepada Allah.',
            'Setelah diselamatkan, kisah Yunus menjadi pelajaran tentang pentingnya sabar dan tidak meninggalkan tugas dakwah.'
        ]
    },
    zakaria: {
        title: 'Nabi Zakaria AS',
        subtitle: 'Nabi yang berdoa anak di usia tua dan mendapat mukjizat.',
        paragraphs: [
            'Nabi Zakaria AS hidup dalam ketakwaan dan rindu memiliki keturunan shalih. Meskipun sudah tua, ia terus memohon kepada Allah.',
            'Allah mengabulkan doanya dengan memberikan putra yang saleh, Nabi Yahya AS.',
            'Kisah Zakaria mengajarkan bahwa doa yang tulus tidak pernah sia-sia, meski harapan tampak sulit terpenuhi.'
        ]
    },
    yahya: {
        title: 'Nabi Yahya AS',
        subtitle: 'Nabi yang suci dan tegas dalam menegakkan kebenaran.',
        paragraphs: [
            'Nabi Yahya AS dikenal dengan kesuciannya dan keberaniannya menegur orang-orang yang berbuat zalim.',
            'Beliau terus menyeru umatnya untuk menjaga iman dan ketaatan kepada Allah.',
            'Kisah Yahya memberi teladan bahwa kebenaran harus disampaikan dengan kelembutan tetapi juga tegas ketika diperlukan.'
        ]
    },
    isa: {
        title: 'Nabi Isa AS',
        subtitle: 'Nabi yang membawa Injil dan mukjizat bagi Bani Israil.',
        paragraphs: [
            'Nabi Isa AS diutus kepada Bani Israil dengan membawa Injil sebagai petunjuk dan kabar gembira.',
            'Beliau melakukan mukjizat seperti menyembuhkan orang buta dan menghidupkan orang mati dengan izin Allah.',
            'Kisah Isa menegaskan bahwa mukjizat adalah bukti kuasa Allah, dan bahwa ajaran ketauhidan harus selalu dijaga.'
        ]
    },
    muhammad: {
        title: 'Nabi Muhammad SAW',
        subtitle: "Nabi terakhir yang membawa Al-Qur'an bagi seluruh umat manusia.",
        paragraphs: [
            "Nabi Muhammad SAW adalah penutup para nabi dan rasul. Beliau menerima wahyu Al-Qur'an selama 23 tahun di Mekkah dan Madinah.",
            'Beliau mengajarkan akhlak mulia, keadilan sosial, dan ketauhidan sebagai dasar peradaban Islam.',
            'Kisah Muhammad mengajarkan bahwa Islam adalah rahmat untuk seluruh alam dan bahwa dakwah harus dibarengi dengan kelembutan dan kebijaksanaan.'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initQuoteRotator();
    initProphetDetailPage();
});

// Slider Background Otomatis
window.addEventListener("load", function() {
    const slides = document.querySelectorAll(".slide");
    console.log("Slides found:", slides.length);
    if (slides.length === 0) return; // Jika tidak ada slide, keluar
    
    let currentSlide = 0;
    console.log("Starting slide:", currentSlide);

    function nextSlide() {
        console.log("Changing slide from", currentSlide, "to", (currentSlide + 1) % slides.length);
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Gambar akan berganti otomatis setiap 3 detik
    setInterval(nextSlide, 3000);
});

// Data Quran (contoh beberapa surah)
const quranData = {
    1: {
        name: "Al-Fatihah",
        ayat: [
            { arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", indo: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang." },
            { arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", indo: "Segala puji bagi Allah, Tuhan semesta alam." },
            { arab: "الرَّحْمَٰنِ الرَّحِيمِ", indo: "Yang Maha Pengasih lagi Maha Penyayang." },
            { arab: "مَالِكِ يَوْمِ الدِّينِ", indo: "Yang menguasai di hari pembalasan." },
            { arab: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", indo: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami meminta pertolongan." },
            { arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", indo: "Tunjukilah kami jalan yang lurus." },
            { arab: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", indo: "Yaitu jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat." }
        ]
    },
    2: {
        name: "Al-Baqarah",
        ayat: [
            { arab: "الِفْ لَامْ مِيمْ", indo: "Alif Lam Mim." },
            { arab: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ", indo: "Kitab ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa." },
            { arab: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", indo: "Yaitu mereka yang beriman kepada yang gaib, mendirikan shalat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka." },
            { arab: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ", indo: "Dan mereka yang beriman kepada apa yang diturunkan kepadamu dan apa yang diturunkan sebelum kamu, serta mereka yakin akan adanya akhirat." },
            { arab: "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", indo: "Mereka itulah yang mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung." }
        ]
    },
    112: {
        name: "Al-Ikhlas",
        ayat: [
            { arab: "قُلْ هُوَ اللَّهُ أَحَدٌ", indo: "Katakanlah: 'Dia-lah Allah, Yang Maha Esa.'" },
            { arab: "اللَّهُ الصَّمَدُ", indo: "Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu." },
            { arab: "لَمْ يَلِدْ وَلَمْ يُولَدْ", indo: "Dia tidak beranak dan tidak pula diperanakkan." },
            { arab: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", indo: "Dan tidak ada seorang pun yang setara dengan Dia.'" }
        ]
    },
    114: {
        name: "An-Nas",
        ayat: [
            { arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", indo: "Katakanlah: 'Aku berlindung kepada Tuhan manusia.'" },
            { arab: "مَلِكِ النَّاسِ", indo: "Raja manusia." },
            { arab: "إِلَٰهِ النَّاسِ", indo: "Sembahan manusia." },
            { arab: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", indo: "Dari kejahatan (bisikan) setan yang biasa bersembunyi." },
            { arab: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", indo: "Yang membisikkan (kejahatan) ke dalam dada manusia." },
            { arab: "مِنَ الْجِنَّةِ وَالنَّاسِ", indo: "Dari (golongan) jin dan manusia.'" }
        ]
    }
};

// Fungsi untuk Quran
document.addEventListener('DOMContentLoaded', () => {
    const surahSelect = document.getElementById('surah-select');
    const ayatContainer = document.getElementById('ayat-container');
    if (!surahSelect || !ayatContainer) return;

    // Populate dropdown
    for (const [key, value] of Object.entries(quranData)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${key}. ${value.name}`;
        surahSelect.appendChild(option);
    }

    // Event listener untuk select
    surahSelect.addEventListener('change', (e) => {
        const surahId = e.target.value;
        if (surahId && quranData[surahId]) {
            displayAyat(surahId);
        } else {
            ayatContainer.innerHTML = '';
        }
    });

    function displayAyat(surahId) {
        const surah = quranData[surahId];
        let html = `<h2>${surah.name}</h2>`;
        surah.ayat.forEach((ayat, index) => {
            html += `
                <div class="ayat">
                    <div class="ayat-number">${index + 1}</div>
                    <div class="ayat-arab">${ayat.arab}</div>
                    <div class="ayat-indo">${ayat.indo}</div>
                </div>
            `;
        });
        ayatContainer.innerHTML = html;
    }
});