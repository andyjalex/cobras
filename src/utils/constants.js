import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'tournaments',
    url: '/tournaments',
  },
  {
    id: 4,
    text: 'social',
    url: '/social',
  },
  {
    id: 5,
    text: 'gallery',
    url: '/gallery',
  }
]
export const CupData = [
  {
    id: 1,
    icon: <GiCompass />,
    year: 2024,
    text1:
   'Tomas, Dan, Cynthia, Jenny',
    text2:
    'Stavros, Vlad, Ilona, Lucy',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    year: 2023,
    text1:
   'Fernanda and Tomas',
    text2:
      'Jibbs and Wojtek',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    year: 2022,
    text1:
   'Mati and Kai',
    text2:
      'Andy and Tomas',
  },
  {
    id: 4,
    icon: <GiStabbedNote />,
    year: 2021,
    text1:
   'Will and Mikey',
    text2:
      'Andy and Maja',
  },
]

export const TournamentData = [
    {
      id: 1,
      icon: <GiCompass />,
      date: "2024-12-01T00:00:00",
      title: "Winter Tournament 24",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
      winners: 'Tomas, Dan, Tomas, Cynthia, Jenny',
      runnersup: 'Stavros, Vlad, Ilona, Lucy',
      imageURL:"https://drive.google.com/thumbnail?id=1N40u6onH6IkgwHIN-fUPkL0oj4PTYPSP"
    },
    {
      id: 2,
      icon: <GiCompass />,
      date: '2024-09-07T00:00:00',
      title: "The Cobra Cup 2024",
      description: "This year we decided the Cup should take the Beach battle format.",
      winners: 'Tomas, Dan, Tomas, Cynthia, Jenny',
      runnersup: 'Stavros, Vlad, Ilona, Lucy',
      imageURL:"https://example.com/tournament-winter-2024.jpg"
    },
    {
      id: 3,
      icon: <GiCompass />,
      date: '2024-05-01T00:00:00',
      title: "Single Gender Pairs Tournaments 24",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
      winners: 'Voy and Wesley, Marcela and Cynthia',
      runnersup: 'Tomas and Vlad, Alicja and Dora',
      imageURL:"https://example.com/tournament-winter-2024.jpg"
    },
    {
      id: 4,
      icon: <GiCompass />,
      date: '2023-10-01T00:00:00',
      title: "Cobras Beach Battle (End of Season)",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
      winners: 'Roney, Igor, Boom, Vicky',
      runnersup: 'Dan, Wes, Marcela, Cynthia',
      imageURL:"https://example.com/tournament-winter-2024.jpg"
    },
    {
        id: 5,
        icon: <GiCompass />,
        date: '2023-08-01T00:00:00',
        title: "The Cobra Cup 23",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
        winners: 'Fe and Tomas',
        runnersup: 'Jibbs and Wojtek',
        imageURL:"https://example.com/tournament-winter-2024.jpg"
      },
      {
        id: 6,
        icon: <GiCompass />,
        date: '2023-07-01T00:00:00',
        title: "Mixed Scramble 23",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
        winners: 'Katie and Ryan',
        runnersup: 'Ads and Marcela',
        imageURL:""
      },
  ]
