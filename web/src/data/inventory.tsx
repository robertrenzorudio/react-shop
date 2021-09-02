import { InventoryItemType } from '../interface/InventoryItemType';
const ps5 =
  'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$';
const xbox = 'http://pngimg.com/uploads/xbox/xbox_PNG101377.png';
const nSwitch =
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nintendo_Switch_Console.png';
const gameboyASP =
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/Game-Boy-Advance-SP-Mk2.png';
const ps2 =
  'https://upload.wikimedia.org/wikipedia/commons/5/58/PS2-Fat-Console-Set.png';
const psp =
  'https://upload.wikimedia.org/wikipedia/commons/d/d6/PSP-3000-Model.png';

const INVENTORY: InventoryItemType[] = [
  {
    id: 1,
    manufacturer: 'Sony',
    name: 'PS5',
    price: 499,
    formattedPrice: '$499',
    imgSrc: ps5,
  },
  {
    id: 2,
    manufacturer: 'Microsoft',
    name: 'Series X',
    price: 499,
    formattedPrice: '$499',
    imgSrc: xbox,
  },
  {
    id: 3,
    manufacturer: 'Nintendo',
    name: 'Switch',
    price: 299,
    formattedPrice: '$299',
    imgSrc: nSwitch,
  },
  {
    id: 4,
    manufacturer: 'Nintendo',
    name: 'Gameboy Advanced SP',
    price: 99,
    formattedPrice: '$99',
    imgSrc: gameboyASP,
  },
  {
    id: 5,
    manufacturer: 'Sony',
    name: 'PS2',
    price: 299,
    formattedPrice: '$299',
    imgSrc: ps2,
  },
  {
    id: 6,
    manufacturer: 'Sony',
    name: 'PSP 3000',
    price: 249,
    formattedPrice: '$249',
    imgSrc: psp,
  },
];

export default INVENTORY;
