/**
 * ============================================================
 * POKÉMON BATTLE EXPERT - SISTEMA EXPERTO
 * VERSIÓN CON CUENTA REGRESIVA Y RESPONSIVE
 * ============================================================
 */

// ============================================================
// 1. BASE DE CONOCIMIENTO (40+ POKÉMON)
// ============================================================

const pokemonDatabase = {
    'Charizard': {
        types: ['fire', 'flying'],
        stats: { hp: 78, atk: 84, def: 78, spd: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Onda Ígnea', type: 'fire', power: 95, accuracy: 90 }
        ]
    },
    'Blastoise': {
        types: ['water'],
        stats: { hp: 79, atk: 83, def: 100, spd: 78 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        moves: [
            { name: 'Hidrobomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Surf', type: 'water', power: 90, accuracy: 100 },
            { name: 'Rayo Hielo', type: 'ice', power: 90, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 }
        ]
    },
    'Venusaur': {
        types: ['grass', 'poison'],
        stats: { hp: 80, atk: 82, def: 83, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        moves: [
            { name: 'Rayo Solar', type: 'grass', power: 120, accuracy: 100 },
            { name: 'Hoja Afilada', type: 'grass', power: 90, accuracy: 100 },
            { name: 'Bomba Lodo', type: 'poison', power: 90, accuracy: 100 },
            { name: 'Síntesis', type: 'grass', power: 0, accuracy: 100 }
        ]
    },
    'Pikachu': {
        types: ['electric'],
        stats: { hp: 35, atk: 55, def: 40, spd: 90 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        moves: [
            { name: 'Impactrueno', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Rayo', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Cola Férrea', type: 'steel', power: 100, accuracy: 75 }
        ]
    },
    'Raichu': {
        types: ['electric'],
        stats: { hp: 60, atk: 90, def: 55, spd: 110 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
        moves: [
            { name: 'Impactrueno', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Rayo', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Cola Férrea', type: 'steel', power: 100, accuracy: 75 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Gengar': {
        types: ['ghost', 'poison'],
        stats: { hp: 60, atk: 65, def: 60, spd: 110 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
        moves: [
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Bomba Lodo', type: 'poison', power: 90, accuracy: 100 },
            { name: 'Hipnosis', type: 'psychic', power: 0, accuracy: 60 },
            { name: 'Come Sueños', type: 'psychic', power: 100, accuracy: 100 }
        ]
    },
    'Dragonite': {
        types: ['dragon', 'flying'],
        stats: { hp: 91, atk: 134, def: 95, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
        moves: [
            { name: 'Cometa Draco', type: 'dragon', power: 130, accuracy: 90 },
            { name: 'Ala de Acero', type: 'steel', power: 70, accuracy: 90 },
            { name: 'Puño Fuego', type: 'fire', power: 75, accuracy: 100 },
            { name: 'Trueno', type: 'electric', power: 110, accuracy: 70 }
        ]
    },
    'Snorlax': {
        types: ['normal'],
        stats: { hp: 160, atk: 110, def: 65, spd: 30 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
        moves: [
            { name: 'Golpe Cuerpo', type: 'normal', power: 85, accuracy: 100 },
            { name: 'Hiperrayo', type: 'normal', power: 150, accuracy: 90 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Descanso', type: 'psychic', power: 0, accuracy: 100 }
        ]
    },
    'Gyarados': {
        types: ['water', 'flying'],
        stats: { hp: 95, atk: 125, def: 79, spd: 81 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
        moves: [
            { name: 'Cascada', type: 'water', power: 80, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 },
            { name: 'Ciclón', type: 'flying', power: 40, accuracy: 100 }
        ]
    },
    'Arcanine': {
        types: ['fire'],
        stats: { hp: 90, atk: 110, def: 80, spd: 95 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Colmillo Ígneo', type: 'fire', power: 65, accuracy: 95 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Alakazam': {
        types: ['psychic'],
        stats: { hp: 55, atk: 50, def: 45, spd: 120 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
        moves: [
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Rayo Confuso', type: 'psychic', power: 0, accuracy: 100 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Recuperación', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Machamp': {
        types: ['fighting'],
        stats: { hp: 90, atk: 130, def: 80, spd: 55 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png',
        moves: [
            { name: 'Puño Dinámico', type: 'fighting', power: 100, accuracy: 50 },
            { name: 'Golpe Cruz', type: 'fighting', power: 100, accuracy: 80 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Roca Afilada', type: 'rock', power: 75, accuracy: 90 }
        ]
    },
    'Mewtwo': {
        types: ['psychic'],
        stats: { hp: 106, atk: 110, def: 90, spd: 130 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
        moves: [
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Onda Mental', type: 'psychic', power: 50, accuracy: 100 },
            { name: 'Recuperación', type: 'normal', power: 0, accuracy: 100 },
            { name: 'Barrera', type: 'psychic', power: 0, accuracy: 100 }
        ]
    },
    'Typhlosion': {
        types: ['fire'],
        stats: { hp: 78, atk: 84, def: 78, spd: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Puño Trueno', type: 'electric', power: 75, accuracy: 100 },
            { name: 'Garra', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Feraligatr': {
        types: ['water'],
        stats: { hp: 85, atk: 105, def: 100, spd: 78 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png',
        moves: [
            { name: 'Hidrobomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 },
            { name: 'Rayo Hielo', type: 'ice', power: 90, accuracy: 100 }
        ]
    },
    'Meganium': {
        types: ['grass'],
        stats: { hp: 80, atk: 82, def: 100, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png',
        moves: [
            { name: 'Rayo Solar', type: 'grass', power: 120, accuracy: 100 },
            { name: 'Hoja Afilada', type: 'grass', power: 90, accuracy: 100 },
            { name: 'Síntesis', type: 'grass', power: 0, accuracy: 100 },
            { name: 'Drenaje', type: 'grass', power: 50, accuracy: 100 }
        ]
    },
    'Ampharos': {
        types: ['electric'],
        stats: { hp: 90, atk: 75, def: 85, spd: 55 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png',
        moves: [
            { name: 'Rayo', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Impactrueno', type: 'electric', power: 40, accuracy: 100 },
            { name: 'Puño Hielo', type: 'ice', power: 75, accuracy: 100 },
            { name: 'Onda Voltio', type: 'electric', power: 0, accuracy: 100 }
        ]
    },
    'Scizor': {
        types: ['bug', 'steel'],
        stats: { hp: 70, atk: 130, def: 100, spd: 65 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png',
        moves: [
            { name: 'Tijera X', type: 'bug', power: 80, accuracy: 100 },
            { name: 'Puño Meteoro', type: 'steel', power: 90, accuracy: 90 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Agilidad', type: 'psychic', power: 0, accuracy: 100 }
        ]
    },
    'Heracross': {
        types: ['bug', 'fighting'],
        stats: { hp: 80, atk: 125, def: 75, spd: 85 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png',
        moves: [
            { name: 'Megacuerno', type: 'bug', power: 120, accuracy: 85 },
            { name: 'A Bocajarro', type: 'fighting', power: 120, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Espada', type: 'normal', power: 70, accuracy: 100 }
        ]
    },
    'Espeon': {
        types: ['psychic'],
        stats: { hp: 65, atk: 65, def: 60, spd: 110 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png',
        moves: [
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Rayo Confuso', type: 'psychic', power: 0, accuracy: 100 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Mañana', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Umbreon': {
        types: ['dark'],
        stats: { hp: 95, atk: 65, def: 110, spd: 65 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
        moves: [
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Tinieblas', type: 'ghost', power: 40, accuracy: 100 },
            { name: 'Rayo Confuso', type: 'psychic', power: 0, accuracy: 100 },
            { name: 'Protección', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Sceptile': {
        types: ['grass'],
        stats: { hp: 70, atk: 85, def: 65, spd: 120 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png',
        moves: [
            { name: 'Hoja Afilada', type: 'grass', power: 90, accuracy: 100 },
            { name: 'Rayo Solar', type: 'grass', power: 120, accuracy: 100 },
            { name: 'Aguijón', type: 'poison', power: 80, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Blaziken': {
        types: ['fire', 'fighting'],
        stats: { hp: 80, atk: 120, def: 70, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png',
        moves: [
            { name: 'Puño Fuego', type: 'fire', power: 75, accuracy: 100 },
            { name: 'Patada Salto', type: 'fighting', power: 100, accuracy: 95 },
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Garra', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Swampert': {
        types: ['water', 'ground'],
        stats: { hp: 100, atk: 110, def: 90, spd: 60 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png',
        moves: [
            { name: 'Hidrobomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Rayo Hielo', type: 'ice', power: 90, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 }
        ]
    },
    'Salamence': {
        types: ['dragon', 'flying'],
        stats: { hp: 95, atk: 135, def: 80, spd: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png',
        moves: [
            { name: 'Cometa Draco', type: 'dragon', power: 130, accuracy: 90 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Puño Fuego', type: 'fire', power: 75, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 }
        ]
    },
    'Metagross': {
        types: ['steel', 'psychic'],
        stats: { hp: 80, atk: 135, def: 130, spd: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png',
        moves: [
            { name: 'Puño Meteoro', type: 'steel', power: 90, accuracy: 90 },
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Agilidad', type: 'psychic', power: 0, accuracy: 100 }
        ]
    },
    'Flygon': {
        types: ['ground', 'dragon'],
        stats: { hp: 80, atk: 100, def: 80, spd: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png',
        moves: [
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Roca Afilada', type: 'rock', power: 75, accuracy: 90 }
        ]
    },
    'Milotic': {
        types: ['water'],
        stats: { hp: 95, atk: 60, def: 79, spd: 81 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
        moves: [
            { name: 'Hidrobomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Rayo Hielo', type: 'ice', power: 90, accuracy: 100 },
            { name: 'Surf', type: 'water', power: 90, accuracy: 100 },
            { name: 'Recuperación', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Lucario': {
        types: ['fighting', 'steel'],
        stats: { hp: 70, atk: 110, def: 70, spd: 90 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
        moves: [
            { name: 'Aura Esfera', type: 'fighting', power: 80, accuracy: 100 },
            { name: 'Puño Meteoro', type: 'steel', power: 90, accuracy: 90 },
            { name: 'Velocidad Extrema', type: 'normal', power: 80, accuracy: 100 },
            { name: 'Danza Espada', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Garchomp': {
        types: ['dragon', 'ground'],
        stats: { hp: 108, atk: 130, def: 95, spd: 102 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png',
        moves: [
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Cometa Draco', type: 'dragon', power: 130, accuracy: 90 },
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Cuchillada', type: 'normal', power: 70, accuracy: 100 }
        ]
    },
    'Weavile': {
        types: ['dark', 'ice'],
        stats: { hp: 70, atk: 120, def: 65, spd: 125 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png',
        moves: [
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Rayo Hielo', type: 'ice', power: 90, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 }
        ]
    },
    'Togekiss': {
        types: ['fairy', 'flying'],
        stats: { hp: 85, atk: 50, def: 95, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png',
        moves: [
            { name: 'Brillo Mágico', type: 'fairy', power: 80, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Deseo', type: 'normal', power: 0, accuracy: 100 }
        ]
    },
    'Spiritomb': {
        types: ['ghost', 'dark'],
        stats: { hp: 50, atk: 92, def: 108, spd: 35 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png',
        moves: [
            { name: 'Tinieblas', type: 'ghost', power: 40, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 }
        ]
    },
    'Haxorus': {
        types: ['dragon'],
        stats: { hp: 76, atk: 147, def: 90, spd: 97 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png',
        moves: [
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Cuchillada', type: 'normal', power: 70, accuracy: 100 },
            { name: 'Danza Dragón', type: 'dragon', power: 0, accuracy: 100 }
        ]
    },
    'Chandelure': {
        types: ['ghost', 'fire'],
        stats: { hp: 60, atk: 55, def: 90, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Psíquico', type: 'psychic', power: 90, accuracy: 100 },
            { name: 'Onda Ígnea', type: 'fire', power: 95, accuracy: 90 }
        ]
    },
    'Excadrill': {
        types: ['ground', 'steel'],
        stats: { hp: 110, atk: 135, def: 60, spd: 88 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png',
        moves: [
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Puño Meteoro', type: 'steel', power: 90, accuracy: 90 },
            { name: 'Cuchillada', type: 'normal', power: 70, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 }
        ]
    },
    'Greninja': {
        types: ['water', 'dark'],
        stats: { hp: 72, atk: 95, def: 67, spd: 122 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
        moves: [
            { name: 'Hidrobomba', type: 'water', power: 110, accuracy: 80 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Surf', type: 'water', power: 90, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Talonflame': {
        types: ['fire', 'flying'],
        stats: { hp: 78, atk: 81, def: 71, spd: 126 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 },
            { name: 'Puño Fuego', type: 'fire', power: 75, accuracy: 100 }
        ]
    },
    'Goodra': {
        types: ['dragon'],
        stats: { hp: 90, atk: 100, def: 70, spd: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png',
        moves: [
            { name: 'Cometa Draco', type: 'dragon', power: 130, accuracy: 90 },
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Trueno', type: 'electric', power: 110, accuracy: 70 },
            { name: 'Surf', type: 'water', power: 90, accuracy: 100 }
        ]
    },
    'Decidueye': {
        types: ['grass', 'ghost'],
        stats: { hp: 78, atk: 107, def: 75, spd: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png',
        moves: [
            { name: 'Hoja Afilada', type: 'grass', power: 90, accuracy: 100 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    },
    'Incineroar': {
        types: ['fire', 'dark'],
        stats: { hp: 95, atk: 115, def: 90, spd: 60 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png',
        moves: [
            { name: 'Lanzallamas', type: 'fire', power: 90, accuracy: 100 },
            { name: 'Mordisco', type: 'dark', power: 60, accuracy: 100 },
            { name: 'Puño Fuego', type: 'fire', power: 75, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 }
        ]
    },
    'Kommo-o': {
        types: ['dragon', 'fighting'],
        stats: { hp: 75, atk: 110, def: 125, spd: 85 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png',
        moves: [
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 },
            { name: 'Aura Esfera', type: 'fighting', power: 80, accuracy: 100 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Danza Dragón', type: 'dragon', power: 0, accuracy: 100 }
        ]
    },
    'Dragapult': {
        types: ['dragon', 'ghost'],
        stats: { hp: 88, atk: 120, def: 75, spd: 142 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png',
        moves: [
            { name: 'Cometa Draco', type: 'dragon', power: 130, accuracy: 90 },
            { name: 'Bola Sombra', type: 'ghost', power: 80, accuracy: 100 },
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Garra Dragón', type: 'dragon', power: 80, accuracy: 100 }
        ]
    },
    'Toxtricity': {
        types: ['electric', 'poison'],
        stats: { hp: 75, atk: 98, def: 70, spd: 75 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png',
        moves: [
            { name: 'Rayo', type: 'electric', power: 90, accuracy: 100 },
            { name: 'Bomba Lodo', type: 'poison', power: 90, accuracy: 100 },
            { name: 'Impactrueno', type: 'electric', power: 40, accuracy: 100 },
            { name: 'Triturar', type: 'dark', power: 80, accuracy: 100 }
        ]
    },
    'Corviknight': {
        types: ['flying', 'steel'],
        stats: { hp: 98, atk: 87, def: 105, spd: 67 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png',
        moves: [
            { name: 'Vuelo', type: 'flying', power: 90, accuracy: 95 },
            { name: 'Puño Meteoro', type: 'steel', power: 90, accuracy: 90 },
            { name: 'Terremoto', type: 'ground', power: 100, accuracy: 100 },
            { name: 'Ataque Rápido', type: 'normal', power: 40, accuracy: 100 }
        ]
    }
};

// ============================================================
// 2. TABLA DE TIPOS (324 REGLAS DE EFECTIVIDAD)
// ============================================================

const typeChart = {
    'normal': { 'rock': 0.5, 'ghost': 0, 'steel': 0.5 },
    'fire': { 'grass': 2, 'ice': 2, 'bug': 2, 'steel': 2, 'fire': 0.5, 'water': 0.5, 'rock': 0.5, 'dragon': 0.5 },
    'water': { 'fire': 2, 'ground': 2, 'rock': 2, 'water': 0.5, 'grass': 0.5, 'dragon': 0.5 },
    'electric': { 'water': 2, 'flying': 2, 'electric': 0.5, 'grass': 0.5, 'ground': 0, 'dragon': 0.5 },
    'grass': { 'water': 2, 'ground': 2, 'rock': 2, 'fire': 0.5, 'grass': 0.5, 'poison': 0.5, 'flying': 0.5, 'bug': 0.5, 'dragon': 0.5, 'steel': 0.5 },
    'ice': { 'grass': 2, 'ground': 2, 'flying': 2, 'dragon': 2, 'fire': 0.5, 'water': 0.5, 'ice': 0.5, 'steel': 0.5 },
    'fighting': { 'normal': 2, 'ice': 2, 'rock': 2, 'steel': 2, 'poison': 0.5, 'flying': 0.5, 'psychic': 0.5, 'bug': 0.5, 'ghost': 0, 'fairy': 0.5 },
    'poison': { 'grass': 2, 'fairy': 2, 'poison': 0.5, 'ground': 0.5, 'rock': 0.5, 'ghost': 0.5, 'steel': 0 },
    'ground': { 'fire': 2, 'electric': 2, 'poison': 2, 'rock': 2, 'steel': 2, 'grass': 0.5, 'bug': 0.5, 'flying': 0 },
    'flying': { 'grass': 2, 'fighting': 2, 'bug': 2, 'electric': 0.5, 'rock': 0.5, 'steel': 0.5 },
    'psychic': { 'fighting': 2, 'poison': 2, 'psychic': 0.5, 'steel': 0.5, 'dark': 0 },
    'bug': { 'grass': 2, 'psychic': 2, 'dark': 2, 'fire': 0.5, 'fighting': 0.5, 'poison': 0.5, 'flying': 0.5, 'ghost': 0.5, 'steel': 0.5, 'fairy': 0.5 },
    'rock': { 'fire': 2, 'ice': 2, 'flying': 2, 'bug': 2, 'fighting': 0.5, 'ground': 0.5, 'steel': 0.5 },
    'ghost': { 'psychic': 2, 'ghost': 2, 'normal': 0, 'dark': 0.5 },
    'dragon': { 'dragon': 2, 'steel': 0.5, 'fairy': 0 },
    'steel': { 'ice': 2, 'rock': 2, 'fairy': 2, 'fire': 0.5, 'water': 0.5, 'electric': 0.5, 'steel': 0.5 },
    'fairy': { 'fighting': 2, 'dragon': 2, 'dark': 2, 'fire': 0.5, 'poison': 0.5, 'steel': 0.5 },
    'dark': { 'psychic': 2, 'ghost': 2, 'fighting': 0.5, 'dark': 0.5, 'fairy': 0.5 }
};

// ============================================================
// 3. VARIABLES GLOBALES (BASE DE HECHOS DINÁMICA)
// ============================================================

let trainerName = '';
let playerTeam = [];
let enemyTeam = [];
let currentPlayerPokemon = null;
let currentEnemyPokemon = null;
let battleActive = false;
let isPlayerTurn = true;
let turnCount = 0;
let timerInterval = null;
let timeLeft = 20;
let selectedTeamIds = [];
let damageReduction = 0.6;
let countdownInterval = null;

// ============================================================
// 4. FUNCIONES DE INTERFAZ
// ============================================================

function startGame() {
    const name = document.getElementById('trainerName').value.trim();
    if (!name) { alert('¡Ingresa tu nombre!'); return; }
    trainerName = name;
    document.getElementById('trainerNameDisplay').textContent = trainerName;
    document.getElementById('welcomeScreen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('teamSelection').style.display = 'block';
        document.getElementById('totalCount').textContent = Object.keys(pokemonDatabase).length;
        populatePokemonSelection();
    }, 500);
}

function populatePokemonSelection() {
    const selector = document.getElementById('pokemonSelector');
    selector.innerHTML = Object.entries(pokemonDatabase).map(([name, data]) => `
        <div class="pokemon-option" onclick="togglePokemonSelection('${name}')" id="option-${name}">
            <img src="${data.sprite}" alt="${name}" loading="lazy">
            <div class="name">${name}</div>
            <div class="types">
                ${data.types.map(type => `<span>${type}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function togglePokemonSelection(pokemonName) {
    const index = selectedTeamIds.indexOf(pokemonName);
    if (index > -1) {
        selectedTeamIds.splice(index, 1);
        document.getElementById(`option-${pokemonName}`).classList.remove('selected');
    } else if (selectedTeamIds.length < 3) {
        selectedTeamIds.push(pokemonName);
        document.getElementById(`option-${pokemonName}`).classList.add('selected');
    } else { alert('Solo puedes elegir 3 Pokémon'); return; }
    document.getElementById('selectedCount').textContent = selectedTeamIds.length;
}

function confirmTeam() {
    if (selectedTeamIds.length !== 3) { alert('Elige exactamente 3 Pokémon'); return; }
    playerTeam = [...selectedTeamIds];
    const availableEnemies = Object.keys(pokemonDatabase).filter(name => !playerTeam.includes(name));
    enemyTeam = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableEnemies.length);
        enemyTeam.push(availableEnemies[randomIndex]);
        availableEnemies.splice(randomIndex, 1);
    }
    document.getElementById('teamSelection').style.display = 'none';
    document.getElementById('battleLayout').style.display = 'grid';
    document.getElementById('turnTimer').style.display = 'block';
    
    // Iniciar cuenta regresiva antes de la batalla
    startCountdown();
}

// ============================================================
// 5. CUENTA REGRESIVA PRE-BATALLA
// ============================================================

function startCountdown() {
    const overlay = document.getElementById('countdownOverlay');
    const number = document.getElementById('countdownNumber');
    const text = document.getElementById('countdownText');
    
    overlay.classList.add('active');
    let count = 3;
    
    number.textContent = count;
    number.className = 'countdown-number';
    text.textContent = '¡Prepara tu equipo!';
    
    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            number.textContent = count;
            text.textContent = count === 2 ? '¡Apunta tu estrategia!' : '¡Prepárate!';
        } else if (count === 0) {
            number.textContent = '⚡';
            number.className = 'countdown-number go';
            text.textContent = '¡YA!';
        } else {
            clearInterval(countdownInterval);
            overlay.classList.remove('active');
            startNewBattle();
        }
    }, 800);
}

// ============================================================
// 6. MOTOR DE INFERENCIA - CÁLCULO DE DAÑO
// ============================================================

function calculateDamage(attacker, defender, move) {
    if (move.power === 0) return { damage: 0, effectiveness: 1, isCritical: false };
    
    let effectiveness = 1;
    attacker.types.forEach(at => 
        defender.types.forEach(dt => {
            if (typeChart[at] && typeChart[at][dt]) 
                effectiveness *= typeChart[at][dt];
        })
    );
    
    const STAB = attacker.types.includes(move.type) ? 1.5 : 1;
    const isCritical = Math.random() < 0.06;
    
    let damage = ((2 * 50 / 5 + 2) * move.power * attacker.stats.atk / defender.stats.def / 50 + 2);
    damage *= STAB * effectiveness * (isCritical ? 1.5 : 1);
    damage *= (0.85 + Math.random() * 0.3);
    damage *= damageReduction;
    
    return { 
        damage: Math.max(1, Math.floor(damage)), 
        effectiveness, 
        isCritical 
    };
}

// ============================================================
// 7. MOTOR DE INFERENCIA - RECOMENDACIONES
// ============================================================

function getRecommendedMoves() {
    let movesWithDetails = [];
    currentPlayerPokemon.moves.forEach((move, idx) => {
        if (move.power > 0) {
            const { damage, effectiveness } = calculateDamage(currentPlayerPokemon, currentEnemyPokemon, move);
            movesWithDetails.push({ idx, damage, effectiveness, move });
        }
    });
    movesWithDetails.sort((a, b) => b.damage - a.damage);
    return movesWithDetails.slice(0, 2).map(m => m.idx);
}

function generateDetailedAdvice() {
    const advice = [];
    const playerHPPercent = (currentPlayerPokemon.currentHP / currentPlayerPokemon.maxHP) * 100;
    const enemyHPPercent = (currentEnemyPokemon.currentHP / currentEnemyPokemon.maxHP) * 100;
    
    let bestMove = null, bestDamage = 0, bestEffectiveness = 1;
    currentPlayerPokemon.moves.forEach(move => {
        if (move.power > 0) {
            const { damage, effectiveness } = calculateDamage(currentPlayerPokemon, currentEnemyPokemon, move);
            if (damage > bestDamage) {
                bestDamage = damage;
                bestMove = move;
                bestEffectiveness = effectiveness;
            }
        }
    });
    
    if (bestMove) {
        let effectivenessText = '';
        if (bestEffectiveness >= 2) effectivenessText = '¡Súper efectivo! Hará el doble de daño.';
        else if (bestEffectiveness <= 0.5) effectivenessText = 'No es muy efectivo...';
        else effectivenessText = 'Daño normal.';
        
        advice.push({
            type: 'attack',
            header: '⚔️ Mejor Movimiento',
            content: `Recomiendo usar <strong>${bestMove.name}</strong> (${bestMove.type.toUpperCase()})`,
            detail: `Daño estimado: ~${bestDamage} | ${effectivenessText}`,
            confidence: bestEffectiveness >= 2 ? 0.95 : bestEffectiveness >= 1 ? 0.75 : 0.5
        });
    }
    
    let typeAdvantage = false, typeDisadvantage = false;
    currentPlayerPokemon.types.forEach(pt => {
        currentEnemyPokemon.types.forEach(et => {
            if (typeChart[pt] && typeChart[pt][et] > 1) typeAdvantage = true;
            if (typeChart[et] && typeChart[et][pt] > 1) typeDisadvantage = true;
        });
    });
    
    if (typeAdvantage && !typeDisadvantage) {
        advice.push({
            type: 'strategy',
            header: '🎯 Ventaja de Tipo',
            content: `${currentPlayerPokemon.name} tiene ventaja sobre ${currentEnemyPokemon.name}!`,
            detail: 'Tus movimientos harán más daño.',
            confidence: 0.9
        });
    } else if (typeDisadvantage && !typeAdvantage) {
        advice.push({
            type: 'warning',
            header: '⚠️ Desventaja de Tipo',
            content: `${currentEnemyPokemon.name} tiene ventaja sobre ${currentPlayerPokemon.name}`,
            detail: 'Considera cambiar a un Pokémon con mejor matchup.',
            confidence: 0.85
        });
    }
    
    if (playerHPPercent < 35) {
        const availableSwitches = playerTeam.filter(p => p !== currentPlayerPokemon.name);
        if (availableSwitches.length > 0) {
            advice.push({
                type: 'switch',
                header: '🔄 Cambio Estratégico',
                content: `${currentPlayerPokemon.name} está al ${Math.floor(playerHPPercent)}% de salud.`,
                detail: `Recomiendo cambiar a ${availableSwitches[0]}`,
                confidence: 0.88
            });
        }
    }
    
    if (enemyHPPercent < 30) {
        advice.push({
            type: 'attack',
            header: '💀 Oportunidad de KO',
            content: `${currentEnemyPokemon.name} está débil (${Math.floor(enemyHPPercent)}% HP)`,
            detail: '¡Un golpe más podría ser suficiente!',
            confidence: 0.92
        });
    }
    
    return advice;
}

// ============================================================
// 8. MÓDULO DE EXPLICACIÓN
// ============================================================

function generateAdvice() {
    const container = document.getElementById('adviceContainer');
    const adviceList = generateDetailedAdvice();
    container.innerHTML = adviceList.slice(0, 4).map(a => `
        <div class="advice-card ${a.type}">
            <div class="advice-header">${a.header}</div>
            <div class="advice-content">${a.content}</div>
            <div class="advice-detail">${a.detail}</div>
            <span class="advice-confidence ${a.confidence >= 0.8 ? 'confidence-high' : a.confidence >= 0.6 ? 'confidence-medium' : 'confidence-low'}">
                ${Math.round(a.confidence * 100)}% confianza
            </span>
        </div>
    `).join('');
    if (adviceList.length === 0) {
        container.innerHTML = `<div class="advice-card"><div class="advice-header">🤔 Analizando</div><div class="advice-content">No hay recomendación específica. Confía en tu instinto.</div></div>`;
    }
}

function updateBattleAnalysis() {
    const container = document.getElementById('battleAnalysis');
    if (!currentPlayerPokemon || !currentEnemyPokemon) return;
    const playerHPPercent = (currentPlayerPokemon.currentHP / currentPlayerPokemon.maxHP) * 100;
    const enemyHPPercent = (currentEnemyPokemon.currentHP / currentEnemyPokemon.maxHP) * 100;
    container.innerHTML = `
        <div style="background: #f8fafc; border-radius: 12px; padding: 10px; margin-bottom: 8px;">
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px; font-size:0.7rem;">📊 Estado Actual</div>
            <div style="font-size: 0.65rem; color: #475569;">Turno: ${turnCount}</div>
            <div style="font-size: 0.65rem; color: #475569;">${currentPlayerPokemon.name}: ${Math.floor(playerHPPercent)}% HP</div>
            <div style="font-size: 0.65rem; color: #475569;">${currentEnemyPokemon.name}: ${Math.floor(enemyHPPercent)}% HP</div>
        </div>
        <div style="background: #f8fafc; border-radius: 12px; padding: 10px;">
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px; font-size:0.7rem;">📚 Pokémon Disponibles</div>
            <div style="font-size: 0.6rem; color: #475569;">Total: ${Object.keys(pokemonDatabase).length}</div>
        </div>
    `;
}

// ============================================================
// 9. CONTROL DE BATALLA
// ============================================================

function startNewBattle() {
    currentPlayerPokemon = { ...pokemonDatabase[playerTeam[0]], name: playerTeam[0], currentHP: pokemonDatabase[playerTeam[0]].stats.hp, maxHP: pokemonDatabase[playerTeam[0]].stats.hp };
    currentEnemyPokemon = { ...pokemonDatabase[enemyTeam[0]], name: enemyTeam[0], currentHP: pokemonDatabase[enemyTeam[0]].stats.hp, maxHP: pokemonDatabase[enemyTeam[0]].stats.hp };
    battleActive = true;
    isPlayerTurn = true;
    turnCount = 0;
    updateBattleUI();
    updateTeamPanel();
    generateAdvice();
    updateBattleAnalysis();
    startTimer();
    addBattleLog(`✨ ${trainerName} envía a ${currentPlayerPokemon.name}!`);
    addBattleLog(`🐉 ¡Un ${currentEnemyPokemon.name} salvaje aparece!`);
}

function updateBattleUI() {
    document.getElementById('playerName').textContent = currentPlayerPokemon.name;
    document.getElementById('enemyName').textContent = currentEnemyPokemon.name;
    document.getElementById('playerSprite').src = currentPlayerPokemon.sprite;
    document.getElementById('enemySprite').src = currentEnemyPokemon.sprite;
    const pPercent = (currentPlayerPokemon.currentHP / currentPlayerPokemon.maxHP) * 100;
    const ePercent = (currentEnemyPokemon.currentHP / currentEnemyPokemon.maxHP) * 100;
    document.getElementById('playerHPText').textContent = `${Math.max(0, currentPlayerPokemon.currentHP)}/${currentPlayerPokemon.maxHP}`;
    document.getElementById('enemyHPText').textContent = `${Math.max(0, currentEnemyPokemon.currentHP)}/${currentEnemyPokemon.maxHP}`;
    updateHPBar('playerHPBar', pPercent);
    updateHPBar('enemyHPBar', ePercent);
    const recs = getRecommendedMoves();
    const movesGrid = document.getElementById('movesGrid');
    movesGrid.innerHTML = currentPlayerPokemon.moves.map((move, idx) => {
        const { damage, effectiveness } = calculateDamage(currentPlayerPokemon, currentEnemyPokemon, move);
        const isRecommended = recs.includes(idx);
        return `
            <button class="move-btn ${isRecommended ? 'recommended' : ''}" onclick="executeMove(${idx})" ${!isPlayerTurn || !battleActive ? 'disabled' : ''}>
                <div class="move-type-badge" style="background: ${getTypeColor(move.type)};">${move.type}</div>
                <div class="move-name">${move.name}</div>
                <div class="move-damage-preview">⚡ ~${damage} | 🎯 ${move.accuracy}%</div>
                ${isRecommended ? '<div style="color: #22c55e; font-size: 0.55rem; margin-top: 2px;">★ RECOMENDADO</div>' : ''}
            </button>
        `;
    }).join('');
}

function getTypeColor(type) {
    const colors = { fire: '#f97316', water: '#3b82f6', grass: '#22c55e', electric: '#eab308', psychic: '#ec4899', ghost: '#8b5cf6', dragon: '#a855f7', fighting: '#ef4444', flying: '#06b6d4', poison: '#a855f7', ground: '#f59e0b', rock: '#78716c', bug: '#84cc16', ice: '#06b6d4', steel: '#6b7280', normal: '#9ca3af', dark: '#4b5563', fairy: '#f472b6' };
    return colors[type] || '#6b7280';
}

function updateHPBar(id, percent) {
    const bar = document.getElementById(id);
    bar.style.width = Math.max(0, percent) + '%';
    bar.className = 'hp-bar-inner';
    if (percent <= 25) bar.classList.add('critical');
    else if (percent <= 50) bar.classList.add('low');
    else if (percent <= 75) bar.classList.add('medium');
}

function updateTeamPanel() {
    const container = document.getElementById('teamContainer');
    container.innerHTML = playerTeam.map(pokemon => {
        const data = pokemonDatabase[pokemon];
        const isActive = pokemon === currentPlayerPokemon.name;
        const isFainted = currentPlayerPokemon && currentPlayerPokemon.currentHP <= 0 && pokemon === currentPlayerPokemon.name;
        return `
            <div class="team-pokemon ${isActive ? 'active' : ''} ${isFainted ? 'fainted' : ''}" 
                 onclick="${pokemon !== currentPlayerPokemon.name && battleActive && isPlayerTurn ? `quickSwitch('${pokemon}')` : ''}">
                <img src="${data.sprite}" alt="${pokemon}">
                <div>
                    <div class="name">${pokemon}</div>
                    <div class="hp-small">❤️ ${data.stats.hp} HP</div>
                </div>
            </div>
        `;
    }).join('');
}

function addBattleLog(msg) {
    const log = document.getElementById('battleLog');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = msg;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
    if (log.children.length > 35) log.removeChild(log.firstChild);
}

// ============================================================
// 10. TIMER Y ANIMACIONES
// ============================================================

function startTimer() {
    stopTimer();
    if (!isPlayerTurn || !battleActive) return;
    timeLeft = 20;
    timerInterval = setInterval(() => {
        if (!isPlayerTurn || !battleActive) { stopTimer(); return; }
        timeLeft--;
        const percent = (timeLeft / 20) * 100;
        document.getElementById('timerFill').style.width = `${percent}%`;
        document.getElementById('timerText').innerHTML = `⏱️ Tu turno - ${timeLeft}s`;
        if (timeLeft <= 5) document.getElementById('timerFill').style.background = "linear-gradient(90deg, #ef4444, #dc2626)";
        if (timeLeft <= 0) {
            stopTimer();
            addBattleLog('⏰ ¡Tiempo agotado! El Asesor elige por ti.');
            const recs = getRecommendedMoves();
            if (recs.length) executeMove(recs[0]);
        }
    }, 1000);
}

function stopTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }

// ============================================================
// 11. FUNCIONES DE BATALLA
// ============================================================

function executeMove(moveIndex) {
    if (!isPlayerTurn || !battleActive) return;
    stopTimer();
    const move = currentPlayerPokemon.moves[moveIndex];
    isPlayerTurn = false;
    disableMoves(true);
    animateAttack('player');
    const { damage, effectiveness, isCritical } = calculateDamage(currentPlayerPokemon, currentEnemyPokemon, move);
    setTimeout(() => {
        if (Math.random() * 100 > move.accuracy) {
            addBattleLog(`${currentPlayerPokemon.name} falló ${move.name}...`);
        } else {
            currentEnemyPokemon.currentHP = Math.max(0, currentEnemyPokemon.currentHP - damage);
            animateHit('enemy');
            showDamageNumber(damage, effectiveness, isCritical);
            addBattleLog(`${currentPlayerPokemon.name} usó ${move.name}`);
            if (isCritical) addBattleLog('💥 ¡GOLPE CRÍTICO!');
            if (effectiveness >= 2) addBattleLog('✨ ¡Súper efectivo! (2x)');
            if (effectiveness <= 0.5 && effectiveness > 0) addBattleLog('😕 Poco efectivo... (0.5x)');
            addBattleLog(`Causó ${damage} de daño`);
            updateHPBars();
            if (currentEnemyPokemon.currentHP <= 0) {
                handleEnemyFainted();
                return;
            }
        }
        setTimeout(enemyTurn, 800);
    }, 500);
}

function enemyTurn() {
    if (!battleActive) return;
    turnCount++;
    updateBattleAnalysis();
    const moves = currentEnemyPokemon.moves.filter(m => m.power > 0);
    const move = moves[Math.floor(Math.random() * moves.length)];
    animateAttack('enemy');
    const { damage, effectiveness, isCritical } = calculateDamage(currentEnemyPokemon, currentPlayerPokemon, move);
    setTimeout(() => {
        if (Math.random() * 100 > move.accuracy) {
            addBattleLog(`${currentEnemyPokemon.name} falló ${move.name}...`);
        } else {
            currentPlayerPokemon.currentHP = Math.max(0, currentPlayerPokemon.currentHP - damage);
            animateHit('player');
            showDamageNumber(damage, effectiveness, isCritical, 'player');
            addBattleLog(`${currentEnemyPokemon.name} usó ${move.name}`);
            if (isCritical) addBattleLog('💥 ¡GOLPE CRÍTICO del rival!');
            addBattleLog(`Recibiste ${damage} de daño`);
            updateHPBars();
            if (currentPlayerPokemon.currentHP <= 0) {
                handlePlayerFainted();
                return;
            }
        }
        isPlayerTurn = true;
        disableMoves(false);
        generateAdvice();
        startTimer();
        addBattleLog('🎯 Tu turno.');
    }, 500);
}

// ============================================================
// 12. MANEJO DE EVENTOS
// ============================================================

function handleEnemyFainted() {
    addBattleLog(`🎉 ¡${currentEnemyPokemon.name} fue derrotado!`);
    enemyTeam.shift();
    if (enemyTeam.length === 0) { endBattle('victory'); return; }
    currentEnemyPokemon = { ...pokemonDatabase[enemyTeam[0]], name: enemyTeam[0], currentHP: pokemonDatabase[enemyTeam[0]].stats.hp, maxHP: pokemonDatabase[enemyTeam[0]].stats.hp };
    addBattleLog(`⚠️ El rival envía a ${currentEnemyPokemon.name}!`);
    updateBattleUI();
    isPlayerTurn = true;
    disableMoves(false);
    generateAdvice();
    startTimer();
}

function handlePlayerFainted() {
    addBattleLog(`😢 ${currentPlayerPokemon.name} se debilitó!`);
    const aliveIndex = playerTeam.findIndex(p => p !== currentPlayerPokemon.name);
    if (aliveIndex === -1) { endBattle('defeat'); return; }
    const newPokemon = playerTeam[aliveIndex];
    currentPlayerPokemon = { ...pokemonDatabase[newPokemon], name: newPokemon, currentHP: pokemonDatabase[newPokemon].stats.hp, maxHP: pokemonDatabase[newPokemon].stats.hp };
    playerTeam = playerTeam.filter(p => p !== newPokemon);
    playerTeam.unshift(newPokemon);
    addBattleLog(`✨ ${trainerName} envía a ${currentPlayerPokemon.name}!`);
    updateBattleUI();
    updateTeamPanel();
    isPlayerTurn = true;
    disableMoves(false);
    generateAdvice();
    startTimer();
}

function switchPokemon() {
    if (!isPlayerTurn || !battleActive) return;
    const available = playerTeam.filter(p => p !== currentPlayerPokemon.name);
    if (available.length === 0) { addBattleLog('¡No tienes más Pokémon!'); return; }
    stopTimer();
    isPlayerTurn = false;
    disableMoves(true);
    const newPokemon = available[0];
    addBattleLog(`${trainerName} retira a ${currentPlayerPokemon.name}`);
    currentPlayerPokemon = { ...pokemonDatabase[newPokemon], name: newPokemon, currentHP: pokemonDatabase[newPokemon].stats.hp, maxHP: pokemonDatabase[newPokemon].stats.hp };
    playerTeam = playerTeam.filter(p => p !== newPokemon);
    playerTeam.unshift(newPokemon);
    addBattleLog(`✨ ¡Adelante, ${currentPlayerPokemon.name}!`);
    updateBattleUI();
    updateTeamPanel();
    setTimeout(() => {
        const moves = currentEnemyPokemon.moves.filter(m => m.power > 0);
        const move = moves[Math.floor(Math.random() * moves.length)];
        const { damage } = calculateDamage(currentEnemyPokemon, currentPlayerPokemon, move);
        currentPlayerPokemon.currentHP = Math.max(0, currentPlayerPokemon.currentHP - damage);
        addBattleLog(`${currentEnemyPokemon.name} ataca! Daño: ${damage}`);
        updateHPBars();
        if (currentPlayerPokemon.currentHP <= 0) {
            handlePlayerFainted();
            return;
        }
        isPlayerTurn = true;
        disableMoves(false);
        generateAdvice();
        startTimer();
    }, 700);
}

function quickSwitch(pokemonName) {
    if (isPlayerTurn && battleActive) {
        stopTimer();
        isPlayerTurn = false;
        disableMoves(true);
        addBattleLog(`${trainerName} cambia a ${pokemonName}`);
        currentPlayerPokemon = { ...pokemonDatabase[pokemonName], name: pokemonName, currentHP: pokemonDatabase[pokemonName].stats.hp, maxHP: pokemonDatabase[pokemonName].stats.hp };
        playerTeam = playerTeam.filter(p => p !== pokemonName);
        playerTeam.unshift(pokemonName);
        updateBattleUI();
        updateTeamPanel();
        setTimeout(() => {
            const moves = currentEnemyPokemon.moves.filter(m => m.power > 0);
            const move = moves[Math.floor(Math.random() * moves.length)];
            const { damage } = calculateDamage(currentEnemyPokemon, currentPlayerPokemon, move);
            currentPlayerPokemon.currentHP = Math.max(0, currentPlayerPokemon.currentHP - damage);
            addBattleLog(`${currentEnemyPokemon.name} ataca! Daño: ${damage}`);
            updateHPBars();
            isPlayerTurn = true;
            disableMoves(false);
            generateAdvice();
            startTimer();
        }, 700);
    }
}

function requestAdvice() {
    generateAdvice();
    addBattleLog('📊 Asesor: "Analizando el campo..."');
}

function surrender() { if (confirm('¿Rendirte? El Asesor recomienda seguir.')) endBattle('defeat'); }

// ============================================================
// 13. FIN DE BATALLA
// ============================================================

function endBattle(result) {
    battleActive = false;
    stopTimer();
    disableMoves(true);
    const resultDiv = document.getElementById('battleResult');
    const title = document.getElementById('resultTitle');
    if (result === 'victory') {
        title.innerHTML = '✨ ¡VICTORIA ESTRATÉGICA! ✨';
        title.style.color = '#22c55e';
        addBattleLog('🎉 ¡Ganaste!');
    } else {
        title.innerHTML = '💔 DERROTA...';
        title.style.color = '#ef4444';
        addBattleLog('😢 Has perdido.');
    }
    resultDiv.style.display = 'block';
}

function newBattle() {
    document.getElementById('battleResult').style.display = 'none';
    document.getElementById('battleLayout').style.display = 'none';
    document.getElementById('teamSelection').style.display = 'block';
    selectedTeamIds = [];
    document.getElementById('selectedCount').textContent = '0';
    populatePokemonSelection();
    battleActive = false;
    stopTimer();
    turnCount = 0;
}

// ============================================================
// 14. ANIMACIONES Y EFECTOS
// ============================================================

function animateAttack(side) { 
    const el = document.getElementById(side + 'Pokemon'); 
    el.classList.add('attacking'); 
    setTimeout(() => el.classList.remove('attacking'), 500); 
}

function animateHit(side) { 
    const el = document.getElementById(side + 'Pokemon'); 
    el.classList.add('hit'); 
    setTimeout(() => el.classList.remove('hit'), 300); 
}

function showDamageNumber(damage, effectiveness, isCritical, side = 'enemy') {
    const el = document.getElementById(side + 'Pokemon');
    const num = document.createElement('div');
    let cls = 'damage-number normal';
    if (isCritical) cls = 'damage-number critical';
    else if (effectiveness >= 2) cls = 'damage-number effective';
    else if (effectiveness <= 0.5) cls = 'damage-number resisted';
    num.className = cls;
    num.textContent = '-' + damage;
    num.style.left = '40%';
    num.style.top = '20%';
    el.style.position = 'relative';
    el.appendChild(num);
    setTimeout(() => num.remove(), 1000);
}

function updateHPBars() {
    if (!currentPlayerPokemon || !currentEnemyPokemon) return;
    const p = (currentPlayerPokemon.currentHP / currentPlayerPokemon.maxHP) * 100;
    const e = (currentEnemyPokemon.currentHP / currentEnemyPokemon.maxHP) * 100;
    document.getElementById('playerHPText').textContent = `${Math.max(0, currentPlayerPokemon.currentHP)}/${currentPlayerPokemon.maxHP}`;
    document.getElementById('enemyHPText').textContent = `${Math.max(0, currentEnemyPokemon.currentHP)}/${currentEnemyPokemon.maxHP}`;
    updateHPBar('playerHPBar', p);
    updateHPBar('enemyHPBar', e);
}

function disableMoves(disabled) {
    document.querySelectorAll('.move-btn').forEach(btn => btn.disabled = disabled);
}

// ============================================================
// 15. INICIALIZACIÓN
// ============================================================

window.startGame = startGame;
window.togglePokemonSelection = togglePokemonSelection;
window.confirmTeam = confirmTeam;
window.executeMove = executeMove;
window.switchPokemon = switchPokemon;
window.quickSwitch = quickSwitch;
window.requestAdvice = requestAdvice;
window.surrender = surrender;
window.newBattle = newBattle;

console.log('✅ Pokémon Battle Expert - Sistema Experto cargado');
console.log(`📚 ${Object.keys(pokemonDatabase).length} Pokémon disponibles`);
console.log('🧠 Motor de Inferencia: Reglas + Lógica Difusa + Incertidumbre');