export let suplementos = [
    {
        id: '1',
        categoria: 'proteinas',
        name: "Proteína Usa Whey Protein 2 lbs (907 grs) de HTN",
        price: "$3500",
        foto: 'https://www.demusculos.com/shop/928-medium_default/proteina-usa-whey-protein-1-kg-de-htn.jpg',
        detalles: 'proteina1',
        stock:'7'
    },

    {
        id: '2',
        categoria: 'creatinas',
        name: "Creatina 500 grs de HTN - Monohidrato y Micronizada",
        price: "$9000",
        foto: 'https://www.demusculos.com/shop/1099-medium_default/creatina-500-htn.jpg',
        detalles: 'creatina1',
        stock:'7'
    },

    {
        id: '3',
        categoria: 'ganadores',
        name: "Mass Gainer Extra Pack de HTN x1.5 kilos",
        price: "$2600",
        foto: 'https://www.demusculos.com/shop/934-medium_default/mass-gainer-htn-1-5-kg.jpg',
        detalles: 'ganador1',
        stock:'7'
    },

    {
        id: '4',
        categoria: 'bcaas',
        name: "Bcaa Pack de HTN x120 comprimidos - Leucina Isoleucina Valina",
        price: "$1500",
        foto: 'https://www.demusculos.com/shop/1090-medium_default/bcaa-pack-htn.jpg',
        detalles: 'bcaas1',
        stock:'7'
    },

    {
        id: '5',
        categoria: 'antioxidantes',
        name: "Antioxidant 4.0 de HTN x60 cápsulas",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/1097-medium_default/antioxidant-40-htn.jpg',
        detalles: 'antiox1',
        stock:'7'
    },

    {
        id: '6',
        categoria: 'glutaminas',
        name: "Glutamina 300 grs de HTN (Grande)",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/979-medium_default/glutamina-300-htn.jpg',
        detalles: 'glutamina1',
        stock:'7'
    },

    {
        id: '7',
        categoria: 'preentrenos',
        name: "Beta Xplode de HTN Pre Entreno 210 grs",
        price: "$2000",
        foto: 'https://www.demusculos.com/shop/391-medium_default/beta-xplode-htn.jpg',
        detalles: 'preentreno1',
        stock:'7'
    },
    
    {
        id: '8',
        categoria: 'proteinas',
        name: "Proteína Usa Whey Protein 2 lbs (907 grs) de HTN",
        price: "$3500",
        foto: 'https://www.demusculos.com/shop/928-medium_default/proteina-usa-whey-protein-1-kg-de-htn.jpg',
        detalles: 'proteina2',
        stock:'7'
    }
];



export const getFetch = new Promise((resolve, reject) => {
    let condition = true

    condition ? setTimeout(() => { resolve(suplementos) }, 2000) : reject('ERROR 404')

})


