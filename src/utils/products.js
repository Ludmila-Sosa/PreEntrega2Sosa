const products = [
    {
      id: 30,
      name: "Shin Ramen Picante",
      stock: 40,
      cost: 1000,
      description: "Uno de los Ramen mas Famosos de Todo corea, Delicioso Ramen de carne picante agregale lo que quieras!",
      capacity: 1500,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/img_20220728_0946291-5c56e0ac60a8c2deef16590124368198-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 95,
      packingId: null,
    },
    {
      id: 29,
      name: "Premium Yakisoba Zhan Wa",
      stock: 100,
      cost: 1140,
      description: "Riquisimo Yakisoba Premium, Delicioso de Porotos negros tostados, verduras & arbejas",
      capacity: 1500,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/107048579_267667547898422_2467588237806067500_n1-51bcbeed0b0ab895db15936377076197-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 95,
      packingId: null,
    },
    {
      id: 76,
      name: "Naruto Ramen 120gr",
      stock: 92,
      cost: 1500,
      description: "Naruto te espera para que pruebes estos deliciosos ramen junto a tus personajes favoritos! Son realmente riquisimos estos ramen y podes agregarle mas sabor poniendole carnes, huevo y mas!",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/aa1bdc41e573cc9c7d0749fbfbc5ec2c1-dd79a0edfd50e39f2616637851280736-1024-1024.jpeg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 10,
      packingId: null,
    },
    {
      id: 170,
      name: "Lovely Soda",
      stock: 100,
      cost: 1575,
      description: "🌸 Lovely Soda una de las gaseosas mas lindas y ricas que vas a probar Volvieron a Suki Daisuki para quedarse nuevamente Sakura & Peach (durazno & sakura) Pearl Lychee Kawaii Magic Plum (cereza)",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/img_20221012_161638_1551-90b92c5cbee8a0566116657531726394-1024-1024.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
    },
    {
      id: 233,
      name: "Sailor Moon Ocean Bomb",
      stock: 790,
      cost: 765,
      description: "Sailor Moon esta de nuevo con nosotros, estas increibles gaseosas de tus personajes favoritos. No te las pierdas son super limitadas!",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/ocean-bomb-sailor-moon-sabor-pomelo-usagi-tsukino-sailor-moon-300-ml1-a38b0f64e5e35b022616637870975623-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 10,
      packingId: null,
    },
    {
      id: 139,
      name: "Bubble Tea Ocean Bomb",
      stock: 100,
      cost: 900,
      description: "Ocean Bomb trae los mas deliciosos Bubble Tea,el famoso te con perlas que empezo en Taiwan y hoy dia es famoso en todo Asia, haciendo esta riquisima combinacion de te con leche + perlas de tapioca que son similares a unas gomitas. probalos en sus dos versiones black sugar bubble milk tea - milk bubble milk tea. No te los pierdas son realmente riquisimos!",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/20211111_1636596750_10058311-d5bd56d40588a7e35c16644138998907-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 16,
      packingId: null,
    },
    {
      id: 68,
      name: "Nissin U.F.O. Yakisoba",
      stock: 89,
      cost: 1490,
      description: "Delicioso yakisoba, tenes que probarlo!",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/img_20220822_183038_5701-c39fc87599ec4156a816613052414868-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 16,
      packingId: null,
    },
    {
      id: 222,
      name: "Soju BlueBerry",
      stock: 20,
      cost: 3000,
      description: "El Soju de Blueberry es uno de los mas ricos que hay, este increible soju es delicioso, con todo el sabor de los Arandanos.",
      capacity: 375,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/soju-viet-quat1-min1-5264652390a90b6ba216284723119949-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 5,
      brandId: 16,
      packingId: null,
    },
    {
      id: 135,
      name: "Chapagetti Yakisoba",
      stock: 100,
      cost: 1490,
      description: "Riquisimo Yakisoba con Salsa Chajang que le da un toque de dulzor riquisimo!",
      capacity: 750,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/image_readtop_2020_281617_158451008741279771-bc3005442c82711d0315936372615542-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 16,
      packingId: null,
    },
    {
      id: 31,
      name: "Nongshim Neoguri Langostinos Ramen",
      stock: 100,
      cost: 1500,
      description: "El mas rico ramen de langostinos Coreano! Contiene pedacitos de langostinos & una riquisima alga de mar!",
      capacity: 700,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/247/182/products/106456569_309254880483366_96000090823723938_n1-ae7c15d81588937c3315936399083536-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 17,
      packingId: null,
    }
  ];

  module.exports = {
    products,
  }