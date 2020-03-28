export interface Fruit {
  id: number,
  name: string,
  color: string,
  description: string
  img?: string
}

const fruits: Array<Fruit> = [
  {
    id: 0,
    name: "Apple",
    color: "red",
    description: "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."
  },
  {
    id: 1,
    name: "Banana",
    color: "Yellow",
    description: 'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
  },
  {
    id: 2,
    name: "Orange",
    color: "Orange",
    description: "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae, native to China. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually; varieties of sweet orange arise through mutations."
  },
  {
    id: 3,
    name: "Pear",
    color: "Green",
    description: "Of those there are two types, the hardest and crunchiest Asian pear, and the juiciest and softest European pear. Both provide a wide range of vitamins, minerals such as copper, iron, potassium, manganese and magnesium, some B vitamins, healthy acids and powerful polyphenols, as well as vitamins C, A, and K."
  },
  {
    id: 4,
    name: "Watermelon",
    color: "Red-Green",
    description: "Watermelon is a plant species in the family Cucurbitaceae, a vine-like flowering plant originating in West Africa. It is a highly cultivated fruit worldwide, having more than 1000 varieties. Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae."
  },
  {
    id: 5,
    name: "Mandarin",
    color: "Orange",
    description: "The mandarin orange, also known as the mandarin or mandarine, is a small citrus tree with fruit resembling other oranges, usually eaten plain or in fruit salads. The tangerine is a group of orange-coloured citrus fruit consisting of hybrids of mandarin orange.",
  },
  {
    id: 6,
    name: "Dragonfruit",
    color: "Pink",
    description: "A pitaya or pitahaya is the fruit of several different cactus species indigenous to the Americas. Pitaya usually refers to fruit of the genus Stenocereus, while pitahaya or dragon fruit refers to fruit of the genus Hylocereus, both in the family Cactaceae."
  },
  {
    id: 7,
    name: "Peach",
    color: "Yellow",
    description: "A peach is a soft, juicy and fleshy stone fruit produced by a peach tree. Peaches were cultivated in China as far back as 8,000 years ago, with domestication at least 4,000 years ago."
  },
  {
    id: 8,
    name: "Lemon",
    color: "Green",
    description: "The lemon, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India. Its fruits are round in shape"
  },
  {
    id: 9,
    name: "Strawberry",
    color: "Red",
    description: "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness."
  },
  {
    id: 10,
    name: "Cherry",
    color: "Red",
    description: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus."
  },
  {
    id: 11,
    name: "Pineaple",
    color: "Yellow",
    description: "The pineapple is a tropical plant with an edible fruit, also called a pineapple, and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries."
  }
];

export default fruits;
