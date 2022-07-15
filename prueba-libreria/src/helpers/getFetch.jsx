export let productos = [
    {
        id: '1',
        categoria: 'Proteina',
        name: "Proteína Usa Whey Protein 2 lbs (907 grs) de HTN",
        price: "$3500",
        foto: 'https://www.demusculos.com/shop/928-medium_default/proteina-usa-whey-protein-1-kg-de-htn.jpg'
    },

    {
        id: '2',
        categoria: 'Creatina',
        name: "Creatina 500 grs de HTN - Monohidrato y Micronizada",
        price: "$9000",
        foto: 'https://www.demusculos.com/shop/1099-medium_default/creatina-500-htn.jpg'
    },

    {
        id: '3',
        categoria: 'Ganador de Masa',
        name: "Mass Gainer Extra Pack de HTN x1.5 kilos",
        price: "$2600",
        foto: 'https://www.demusculos.com/shop/934-medium_default/mass-gainer-htn-1-5-kg.jpg'
    },

    {
        id: '4',
        categoria: 'BCAA',
        name: "Bcaa Pack de HTN x120 comprimidos - Leucina Isoleucina Valina",
        price: "$1500",
        foto: 'https://www.demusculos.com/shop/1090-medium_default/bcaa-pack-htn.jpg'
    },

    {
        id: '5',
        categoria: 'Antioxidante',
        name: "Antioxidant 4.0 de HTN x60 cápsulas",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/1097-medium_default/antioxidant-40-htn.jpg'
    },

    {
        id: '6',
        categoria: 'Glutamina',
        name: "Glutamina 300 grs de HTN (Grande)",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/979-medium_default/glutamina-300-htn.jpg'
    },

    {
        id: '7',
        categoria: 'Preentreno',
        name: "Beta Xplode de HTN Pre Entreno 210 grs",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/391-medium_default/beta-xplode-htn.jpg'
    }
];



export const getFetch = new Promise((resolve, reject) => {
    let condition = true

    condition ? setTimeout(() => { resolve(productos) }, 2000) : reject('ERROR 404')

})


