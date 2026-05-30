export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Rozakki Muhtar, S.H.',
            child: 'Putra pertama',
            father: 'Ali Muhtar',
            mother: 'Rubaeah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Aprilia Dwi Wesira Nugroho',
            child: 'Putri kedua',
            father: 'Harifan Rahman N.',
            mother: 'Ani Fatmawati',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.webp'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Juni',
            date: '4',
            day: 'Kamis',
            hours: {
                start: '15.00',
                finish: '22.00'
            },
            address: 'Wisma Perjuangan Kenjo'
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '15',
            day: 'Senin',
            hours: {
                start: '08.00',
                finish: '23.00'
            },
            address: 'Gilimanuk - Bali. Jl. Jalak Putih VII Arum Gg 7'
        },
    },

    link: {
        calendar: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Rozakki+%26+Aprilia&dates=20260615T010000Z/20260615T160000Z&details=Mohon+doa+restu+untuk+pernikahan+kami.&location=Gilimanuk+-+Bali.+Jl.+Jalak+Putih+VII+Arum+Gg+7',
        mapAkad: 'https://maps.app.goo.gl/6sVPCKmZwDRQYfV27?g_st=ic',
        mapResepsi: 'https://maps.app.goo.gl/4mbrcU9eGGRBMLKF6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
    ],

    bank: [
        {
            id: 1,
            name: 'Rozakki Muhtar',
            icon: './src/assets/images/bri.png',
            rekening: '012501038066509'
        },
        {
            id: 2,
            name: 'Aprilia Dwi Wesira Nugroho',
            icon: './src/assets/images/seabank.png',
            rekening: '901713968571'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxiTAtj1-mJR7kkkFjw5dMMsvbaTDbKy9Bf8Krj6DqJHh-68N0vkbT-vHDWAD25rIq5/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
