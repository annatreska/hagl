const ASSETS = '_strona_HaGL';

const artworks = [
  { num: '01', author: 'Anna Treska',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/01_F_Anna_Treska.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/01_B_Anna_Treska.jpg` },
  { num: '02', author: 'Anna Treska',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/02_F_Anna_Treska.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/02_B_Anna_Treska.jpg` },
  { num: '03', author: 'Anna Treska',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/03_F_Anna_Treska.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/03_B_Anna_Treska.jpg` },
  { num: '04', author: 'Anna Treska',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/04_F_Anna_Treska.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/04_B_Anna_Treska.jpg` },
  { num: '05', author: 'Anna Treska',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/05_F_Anna_Treska.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/05_B_Anna_Treska.jpg` },
  { num: '06', author: 'Ezran Treska',          nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/06_F_Ezran_Treska.jpg`,             imgB: `${ASSETS}/archiwum_obrazow/06_B_Ezran_Treska.jpg` },
  { num: '07', author: 'Yehor',                 nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/07_F_Yehor.jpg`,                    imgB: `${ASSETS}/archiwum_obrazow/07_B_Yehor.jpg` },
  { num: '08', author: 'Vitalina Kariuk',       nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/08_F_Vitalina_Kariuk.jpg`,          imgB: `${ASSETS}/archiwum_obrazow/08_B_Vitalina.jpg` },
  { num: '09', author: 'Miłosz Kozioł',         nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/09_F_MiłoszKozioł.jpg`,             imgB: `${ASSETS}/archiwum_obrazow/09_B_MiłoszKozioł.jpg` },
  { num: '10', author: 'Ksawery Kołątaj',       nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/10_F_Ksawery_Kołątaj.jpg`,          imgB: `${ASSETS}/archiwum_obrazow/10_B_Ksawery_Kołątaj.jpg` },
  { num: '11', author: 'Stanisław Oraczewski',  nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/11_F_Stanisław_Oraczewski..jpg`,    imgB: `${ASSETS}/archiwum_obrazow/11_B_Stanisław_Oraczewski.jpg` },
  { num: '12', author: 'Max Omylak',            nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/12_F_Max_Omylak.jpg`,               imgB: `${ASSETS}/archiwum_obrazow/12_B_Max_Omylak.jpg` },
  { num: '13', author: 'Piotr Pajor',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/13_F_Piotr_Pajor.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/13_B_Piotr_Pajor.jpg` },
  { num: '14', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/14_F.jpg`,                          imgB: `${ASSETS}/archiwum_obrazow/14_B.jpg` },
  { num: '15', author: 'IK',                    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/15_F_IK.jpg`,                       imgB: `${ASSETS}/archiwum_obrazow/15_B_IK.jpg` },
  { num: '16', author: 'NN',                    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/16_F_NN.jpg`,                       imgB: `${ASSETS}/archiwum_obrazow/16_B_NN.jpg` },
  { num: '17', author: 'Niki Nikola Proskura',  nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/17_F_Niki_Nikola_Proskura.jpg`,     imgB: `${ASSETS}/archiwum_obrazow/17_B_Niki_Nikola_Proskura.jpg` },
  { num: '18', author: 'mama Hany',             nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/18_F_mama_Hany.jpg`,                imgB: `${ASSETS}/archiwum_obrazow/18_B_mama_Hany.jpg` },
  { num: '19', author: 'Agnieszka Łukawska',    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/19_F_AgnieszkaŁukawska.jpg`,        imgB: `${ASSETS}/archiwum_obrazow/19_B_AgnieszkaŁukawska.jpg` },
  { num: '20', author: 'Hana Frej',             nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/20_F_Hana_Frej.jpg`,                imgB: `${ASSETS}/archiwum_obrazow/20_B_Hana_Frej.jpg` },
  { num: '21', author: 'Gaja Potiopa',          nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/21_F_Gaja_Potiopa.jpg`,             imgB: `${ASSETS}/archiwum_obrazow/21_B_Gaja_Potiopa.jpg` },
  { num: '22', author: 'NN Treska',             nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/22_F_NN_Treska.jpg`,                imgB: `${ASSETS}/archiwum_obrazow/22_B_NN_Treska.jpg` },
  { num: '23', author: 'Pola Samborska',        nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/23_F_Pola_Samborska.jpg`,           imgB: `${ASSETS}/archiwum_obrazow/23_B_Pola_Samborska.jpg` },
  { num: '24', author: 'Beata Samborska',       nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/24_F_BeataSamborska..jpg`,          imgB: `${ASSETS}/archiwum_obrazow/24_B_BeataSamborska.jpg` },
  { num: '25', author: 'jelenek',               nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/25_F_jelenek.jpg`,                  imgB: `${ASSETS}/archiwum_obrazow/25_B_jelenek.jpg` },
  { num: '26', author: 'u Ireny',               nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/26_F_1rok_uIreny.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/26_B_1rok_uIreny.jpg` },
  { num: '27', author: 'iza',                   nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/27_F_1rok_iza.jpg`,                 imgB: `${ASSETS}/archiwum_obrazow/27_B_1rok_iza.jpg` },
  { num: '28', author: 'Treska',                nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/28_F_Treska.jpg`,                   imgB: `${ASSETS}/archiwum_obrazow/28_B_Treska.jpg` },
  { num: '29', author: 'marcyś',                nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/29_F_1rok_marcyś.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/29_B_1rok_marcyś..jpg` },
  { num: '30', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/30_F_1rok4.jpg`,                    imgB: `${ASSETS}/archiwum_obrazow/30_B_1rok4.jpg` },
  { num: '31', author: 'Rafał Majka',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/31_F_RafalMajka.jpg`,               imgB: `${ASSETS}/archiwum_obrazow/31_B_RafalMajka.jpg` },
  { num: '32', author: 'ogórek',                nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/32_F_1rok_ogórek.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/32_B_1rok_ogórek.jpg` },
  { num: '33', author: 'Rog-Ociepka',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/33_F_Rog-Ociepka.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/33_B_Rog-Ociepka.jpg` },
  { num: '34', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/34_F_1rok_2.jpg`,                   imgB: `${ASSETS}/archiwum_obrazow/34_B_1rok_2.jpg` },
  { num: '35', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/35_F_1rok3.jpg`,                    imgB: `${ASSETS}/archiwum_obrazow/35_B_1rok3.jpg` },
  { num: '36', author: 'ola',                   nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/36_F_1rok_ola.jpg`,                 imgB: `${ASSETS}/archiwum_obrazow/36_B_1rok_ola.jpg` },
  { num: '37', author: 'NN',                    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/37_F_NN.jpg`,                       imgB: `${ASSETS}/archiwum_obrazow/37_B_NN.jpg` },
  { num: '38', author: 'Rafał Majka',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/38_F_RafalMajka.jpg`,               imgB: `${ASSETS}/archiwum_obrazow/38_B_RafalMajka.jpg` },
  { num: '39', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/39_F_1rok_1.jpg`,                   imgB: `${ASSETS}/archiwum_obrazow/39_B_1rok_1.jpg` },
  { num: '40', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/40_F_1rok_1.jpg`,                   imgB: `${ASSETS}/archiwum_obrazow/40_B_1rok_1.jpg` },
  { num: '41', author: 'NN',                    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/41_F_NN.jpg`,                       imgB: `${ASSETS}/archiwum_obrazow/41_B_NN.jpg` },
  { num: '42', author: 'Rafał Majka',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/42_F_RafalMajka.jpg`,               imgB: `${ASSETS}/archiwum_obrazow/42_B_RafalMajka.jpg` },
  { num: '43', author: 'vk',                    nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/43_F_vk.jpg`,                       imgB: `${ASSETS}/archiwum_obrazow/43_B_vk.jpg` },
  { num: '44', author: '',                      nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/44_F_1rok.jpg`,                     imgB: `${ASSETS}/archiwum_obrazow/44_B_1rok.jpg` },
  { num: '45', author: 'Rafał Majka',           nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/45_F_RafalMajka.jpg`,               imgB: `${ASSETS}/archiwum_obrazow/45_B_RafalMajka.jpg` },
  { num: '46', author: 'Zuzia & Julka',         nameEN: '', namePL: '', nameES: '', imgF: `${ASSETS}/archiwum_obrazow/46_F_Zuzia_Julka.jpg`,              imgB: `${ASSETS}/archiwum_obrazow/46_B_Zuzia_Julka.jpg` },
];

const eventFolders = {
  backstage: {
    label: 'Backstage',
    description: '',
    links: [],
    images: [
      `${ASSETS}/wydarzenia/backstage/IMG_7290.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7291.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7302.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7312.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7317.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7323.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7324.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7325.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7337.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7339.jpg`,
      `${ASSETS}/wydarzenia/backstage/IMG_7345.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage1.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage2.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage3.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage4.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage5.jpg`,
      `${ASSETS}/wydarzenia/backstage/backstage6.jpg`,
    ],
  },
  happening1_wernisaz: {
    label: 'Happening 1 / Wernisaż',
    description: `17.11.2025, Wystawa „Pomiędzy"\nGaleria Otwarta (filia Uniwersytetu SWPS), al. Jana Pawła II 39A, Kraków\n\nWernisaż, happening oraz wykład odbyły się w ramach Festiwalu Sztuka do Rzeczy. Design w Krakowie.\n\nW wystawie udział wzięli: Wojciech Brzozowski, Ziemowit Kościelny, Miłosz Kozioł, prof. Magdalena Pińczyńska, Joanna Róg–Ociepka i dr Anna Treska-Siwoń.\n\nHappening kolektywu Have a Good Look: Joanna Róg–Ociepka, Anna Treska-Siwoń i widzowie.\n\nWykład: dr Kinga Blaschke.`,
    links: [
      {
        text: 'Relacja prasowa w Gazecie Krakowskiej',
        url:  'https://gazetakrakowska.pl/na-tej-wystawie-w-krakowie-gwiazdorzy-otwieracz-do-konserw-i-design-gorszego-sortu-przedmioty-codziennego-uzytku-opowiadaja-o-relacjach/ar/c13p2-28188003#google_vignette?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnFrZ7ooibHiIhiMBFo4NvYkS-qHn9UevP0Q0AwNuVmKLMtnqdlPhbe09YrfA_aem_xe37o8LIQToc39Btu9CMLA',
      },
    ],
    images: [
      `${ASSETS}/wydarzenia/happening1_wernisaz/28074862-6c04-4ab1-ad7e-f5261bb4d431.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/3a097f8a-998c-49ca-84bd-c34f2d0a5377.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/4641ccc1-b808-4a1e-9a8b-afeee6318323.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/52cc1590-9d33-4d1c-b756-26c10507cb05.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/839fbb1a-628a-4c43-99d5-66e36833f3f3.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/914cf34c-aee7-4137-bb06-dc729577fcb5.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/9607cfd6-276a-46e9-b9e3-493f9398a34c.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_0508.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_0509.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_0510.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_0513.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7346.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7351.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7352.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7353.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7354.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7355.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7416.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/IMG_7443.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/a3a8e0e9-a234-4389-908f-336d32afb444.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/acebcde6-8d56-410b-9add-bf8ef0a05eb3.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/c5b28900-662a-4755-89b8-ec062a8627e2.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/e4a7038e-4c69-4029-93d7-f4dc39ecaebc.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/eb0e841c-63d1-47ff-9deb-86f09c2f05c2.jpg`,
      `${ASSETS}/wydarzenia/happening1_wernisaz/ede1b6bf-6a7d-45c4-9ec4-271bb01bcb83.jpg`,
    ],
  },
  happening2: {
    label: 'Happening 2',
    description: `28.11.2025, Wystawa „Pomiędzy" w ramach Festiwalu Sztuka do Rzeczy. Design w Krakowie.\nGaleria Otwarta (filia Uniwersytetu SWPS), al. Jana Pawła II 39A, Kraków\n\nHappening kolektywu Have a Good Look: Joanna Róg–Ociepka, Anna Treska-Siwoń i widzowie.`,
    links: [],
    images: [
      `${ASSETS}/wydarzenia/happening2/1000010163.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010164.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010165.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010166.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010167.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010168.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010169.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010171.jpeg`,
      `${ASSETS}/wydarzenia/happening2/1000010172.jpeg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7426.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7427.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7428.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7429.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7430.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7431.jpg`,
      `${ASSETS}/wydarzenia/happening2/IMG_7432.jpg`,
      `${ASSETS}/wydarzenia/happening2/all1.jpg`,
      `${ASSETS}/wydarzenia/happening2/all2.jpg`,
    ],
  },
  inne: {
    label: 'Inne',
    description: '',
    links: [],
    images: [
      `${ASSETS}/wydarzenia/inne/CEC2B8E9-566A-442F-8648-5202266D4A58_1_201_a.jpg`,
      `${ASSETS}/wydarzenia/inne/D4FB8CA8-F7F3-41F0-AF26-E8373705826C_1_201_a.jpg`,
      `${ASSETS}/wydarzenia/inne/MiT.jpg`,
    ],
  },
};

// Flat list of all event images with event key attached, randomly shuffled
const allEventImages = Object.entries(eventFolders).flatMap(([key, ev]) =>
  ev.images.map(src => ({ src, eventKey: key, label: ev.label }))
);

// Fisher-Yates shuffle (deterministic seed based on page load)
(function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
})(allEventImages);

// News config – set text and expiry date (ISO string) to show news banner
// Leave text empty or set expired date to hide the banner
const newsConfig = {
  text: 'Noc muzeów z narzędziami kuchennymi! 15 maja od godziny 19 zapraszamy na happening do Muzeum Inżynierii i Techniki w Krakowie. Przynieś swoje ulubione narzędzie kuchenne i namaluj z nami jego portret (lub pozwól nam go namalować). Powstałe prace będzie można odebrać po czasie ekspozycji w MIT.',
  expires: '2026-06-04',
};
