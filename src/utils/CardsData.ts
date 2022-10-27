export interface CardDataProps {
  id: number;
  cardNumber: number;
  title: string;
  image: unknown;
  description: string;
  extraDescription: string;
  difficult: string;
  stimulation: string;
  positionType: string;
  penetration: string;
  accessories: string;
}

export const cardsData = [
  {
    id: 1,
    cardNumber: 11,
    title: 'Kinky Spider',
    image: require('../assets/images/kinkySpider.png') || null,
    description:
      "Tis' the season for all the reason to travel. With that comes packing and family... and what better way to survive both than having this ready to go?",
    extraDescription:
      "Tis' the season for all the reason to travel. With that comes packing and family... and what better way to survive both than having this ready to go? Tis' the season for all the reason to travel. With that comes packing and family... and what better way to survive both than having this ready to go? Tis' the season for all the reason to travel. With that comes packing and family... and what better way to survive both than having this ready to go? Tis' the season for all the reason to travel. With that comes packing and family... ",
    difficult: 'Extra Hard',
    stimulation: 'Lips',
    positionType: 'Stand',
    penetration: 'Medium',
    accessories: 'None',
  },
  {
    id: 2,
    cardNumber: 4,
    title: 'Crazy Position Alpha',
    image: require('../assets/images/kinkySpider.png') || null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est.',
    extraDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est. Quisque vestibulum sapien ut tristique lacinia. Aliquam nisl metus, eleifend ut nisl non, vulputate placerat lorem. Proin purus justo, sollicitudin id imperdiet vel, finibus ac nisl.',
    difficult: 'Easy',
    stimulation: 'Ears',
    positionType: 'Aerial',
    penetration: 'None',
    accessories: 'None',
  },
  {
    id: 3,
    cardNumber: 12,
    title: 'Crazy Position Beta',
    image: require('../assets/images/kinkySpider.png') || null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est.',
    extraDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est. Quisque vestibulum sapien ut tristique lacinia. Aliquam nisl metus, eleifend ut nisl non, vulputate placerat lorem. Proin purus justo, sollicitudin id imperdiet vel, finibus ac nisl.',
    difficult: 'Medium',
    stimulation: 'Nipples',
    positionType: 'Laydown',
    penetration: 'Soft',
    accessories: 'Pillow',
  },
  {
    id: 4,
    cardNumber: 8,
    title: 'Crazy Position Gama',
    image: require('../assets/images/kinkySpider.png') || null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est.',
    extraDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod justo sed nunc vehicula, eget aliquam ante aliquam. Nam vitae pellentesque ex, at posuere est. Quisque vestibulum sapien ut tristique lacinia. Aliquam nisl metus, eleifend ut nisl non, vulputate placerat lorem. Proin purus justo, sollicitudin id imperdiet vel, finibus ac nisl.',
    difficult: 'Extra Hard',
    stimulation: 'Lips',
    positionType: 'Stand',
    penetration: 'Medium',
    accessories: 'None',
  },
];
