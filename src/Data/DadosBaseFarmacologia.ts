export type Material = {
    id: number;
    item: string;
    num?: number;
};

export type Potion = {
    id: number;
    nome: string;
    taxa: number;
    materiais: Material[];
};

//http://static.divine-pride.net/images/items/item/6210.png

export const potions: Potion[] = [
    {
        id: 12428,
        nome: 'Poção Branca Especial',
        taxa: 10,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 504, item: "Poção Branca", num: 20},
            {id: 509, item: "Erva Branca", num: 10},
            {id: 970, item: "Álcool", num: 1}
        ]
    },
    {
        id: 12436,
        nome: 'Poção Vitata 500',
        taxa: 20,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 514, item: "Uva", num: 10},
            {id: 518, item: "Mel", num: 10},
            {id: 510, item: "Erva Azul", num: 10}
        ]
    },
    {
        id: 12437,
        nome: "Suco Celular Enriquecido",
        taxa: 30,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 7455, item: "Molho Picante", num: 5},
            {id: 656, item: "Poção do Despertar", num: 5},
            {id: 645, item: "Poção da Concentração", num: 5}
        ]
    },
    {
        id: 12475,
        nome: "Poção de Recuperação",
        taxa: 40,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 610, item: "Folha de Yggdrasil", num: 1},
            {id: 511, item: "Erva Verde", num: 20},
            {id: 522, item: "Mastela", num: 1},
            {id: 525, item: "Panaceia", num: 5}
        ]
    },
    {
        id: 1100003,
        nome: "Elixir Vermelho",
        taxa: 80,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 1093, item: "Garrafa de Poção", num: 5},
            {id: 11621, item: "Xarope Vermelho", num: 15}
        ]
    },
    {
        id: 1100004,
        nome: "Elixir Azul",
        taxa: 160,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 1093, item: "Garrafa de Poção", num: 5},
            {id: 11624, item: "Xarope Azul", num: 15}
        ]
    },
    {
        id: 1100005,
        nome: "Elixir Dourado",
        taxa: 160,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 1093, item: "Garrafa de Poção", num: 5},
            {id: 11623, item: "Xarope Branco", num: 10},
            {id: 11622, item: "Xarope Amarelo", num: 10}
        ]
    },
    {
        id: 100231,
        nome: "Poção X",
        taxa: 160,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 607, item: "Fruto de Yggdrasil", num: 10},
            {id: 969, item: "Ouro", num: 5}
        ]
    },
    {
        id: 100232,
        nome: "Energético Físico",
        taxa: 120,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 507, item: "Erva Vermelha", num: 45},
            {id: 608, item: "Semente de Yggdrasil", num: 5}
        ]
    },
    {
        id: 100233,
        nome: "Energético Mágico",
        taxa: 120,
        materiais: [
            {id: 1092, item: "Tubo de Ensaio", num: 10},
            {id: 510, item: "Erva Azul", num: 15},
            {id: 608, item: "Semente de Yggdrasil", num: 5}
        ]
    },
    {
        id: 12422,
        nome: "Poção Pequena de HP",
        taxa: 10,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 509, item: "Erva Branca", num: 10},
            {id: 7455, item: "Molho Picante", num: 1},
            {id: 528, item: "Ração para Monstros", num: 5}
        ]
    },
    {
        id: 12423,
        nome: "Poção Média de HP",
        taxa: 20,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 509, item: "Erva Branca", num: 10},
            {id: 508, item: "Erva Amarela", num: 10},
            {id: 7455, item: "Molho Picante", num: 1}
        ]
    },
    {
        id: 12424,
        nome: "Poção Grande de HP",
        taxa: 40,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 509, item: "Erva Branca", num: 15},
            {id: 522, item: "Mastela", num: 3},
            {id: 523, item: "Água Benta", num: 1},
            {id: 7455, item: "Molho Picante", num: 1}
        ]
    },
    {
        id: 12425,
        nome: "Poção Pequena de SP",
        taxa: 10,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 568, item: "Limão", num: 10},
            {id: 514, item: "Uva", num: 10},
            {id: 7453, item: "Molho Doce", num: 1}
        ]
    },
    {
        id: 12426,
        nome: "Poção Média de SP",
        taxa: 15,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 518, item: "Mel", num: 10},
            {id: 510, item: "Erva Azul", num: 10},
            {id: 7453, item: "Molho Doce", num: 1}
        ]
    },
    {
        id: 12427,
        nome: "Poção Grande de SP",
        taxa: 20,
        materiais: [
            {id: 713, item: "Garrafa Vazia", num: 10},
            {id: 526, item: "Geleia Real", num: 10},
            {id: 510, item: "Erva Azul", num: 15},
            {id: 7453, item: "Molho Doce", num: 1}
        ]
    },
    // Poções de Planta e Cogumelo
    {
        id: 6210,
        nome: "Semente de Planta Selvagem",
        taxa: 30,
        materiais: [
            {id: 576, item: "Fruta Espinhosa", num: 10}
        ]
    },
    {
        id: 6211,
        nome: "Semente de Planta Sanguessuga",
        taxa: 30,
        materiais: [
            {id: 1033, item: "Raiz de Planta Carnívora", num: 10}
        ]
    },
    {
        id: 6212,
        nome: "Esporo de Cogumelo Explosivo",
        taxa: 15,
        materiais: [
            {id: 921, item: "Esporo", num: 10},
            {id: 7033, item: "Esporo Venenoso", num: 5},
            {id: 6244, item: "Mistura de Pólvora", num: 2}
        ]
    }
];


export type NivelFarmacologia = {
    nv: number;
    fator: number;
    maxPocoes: number;
};

export const niveisFarmacologia: NivelFarmacologia[] = [
    {nv: 1, fator: 600, maxPocoes: 7},
    {nv: 2, fator: 580, maxPocoes: 8},
    {nv: 3, fator: 560, maxPocoes: 8},
    {nv: 4, fator: 540, maxPocoes: 9},
    {nv: 5, fator: 520, maxPocoes: 9},
    {nv: 6, fator: 500, maxPocoes: 10},
    {nv: 7, fator: 480, maxPocoes: 10},
    {nv: 8, fator: 460, maxPocoes: 11},
    {nv: 9, fator: 440, maxPocoes: 11},
    {nv: 10, fator: 420, maxPocoes: 12},
];
