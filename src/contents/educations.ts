import nusLogo from '@/assets/nus.png';
import tunaLogo from '@/assets/tsinghua.png';
import bitLogo from '@/assets/bit.png';

const educations = [
  {
    time: '2023.08 - 2027.07 (Expected)',
    details: [
      [
        'Ph.D. Student in Computer Science at ',
        ['School of Computing', 'link', 'https://www.comp.nus.edu.sg/'],
        ', ',
        ['National University of Singapore.', 'link', 'https://nus.edu.sg/'],
        ', supervised by ',
        [
          'Prof. Mohan Kankanhalli',
          'link',
          'https://scholar.google.com/citations?user=6Lx_eowAAAAJ'
        ],
        '.'
      ],
      ['Research Topics: Computer Vision, Computer Graphics, Multimedia.']
    ],
    logo: nusLogo
  },
  {
    time: '2020.09 - 2023.07',
    details: [
      [
        'Master in Computer Technology at ',
        [
          'Tsinghua Shenzhen International Graduate School',
          'link',
          'https://www.sigs.tsinghua.edu.cn/en/'
        ],
        ', ',
        ['Tsinghua University', 'link', 'https://www.tsinghua.edu.cn'],
        ', supervised by ',
        [
          'Prof. Chun Yuan',
          'link',
          'https://scholar.google.com/citations?user=fYdxi2sAAAAJ'
        ],
        '.'
      ],
      ['GPA: ', ['3.74', 'bold'], '/4.00'],
      ['Research Topics: Computer Vision, Computer Graphics, Machine Learning.']
    ],
    logo: tunaLogo
  },
  {
    time: '2016.09 - 2020.07',
    details: [
      [
        'Bachelor in Software Engineering at ',
        ['School of Computer Science & Technology', 'link', 'https://cs.bit.edu.cn'],
        ', ',
        ['Beijing Institute of Technology.', 'link', 'https://www.bit.edu.cn']
      ],
      ['GPA: ', ['90.97', 'bold'], '/100 (Top 1%)']
    ],
    logo: bitLogo
  }
];

export default educations;
