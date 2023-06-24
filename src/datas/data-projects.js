import { useTranslation } from 'react-i18next';

import project01_460 from '../images/portfolio/svtdh-portfolio-calculate-price-460w.png';
import project01_720 from '../images/portfolio/svtdh-portfolio-calculate-price-720w.png';
import project01_300 from '../images/portfolio/svtdh-portfolio-calculate-price-300w.png';
import project01_520 from '../images/portfolio/svtdh-portfolio-calculate-price-520w.png';
import project02_460 from '../images/portfolio/svtdh-portfolio-current-site-460w.png';
import project02_720 from '../images/portfolio/svtdh-portfolio-current-site-720w.png';
import project02_300 from '../images/portfolio/svtdh-portfolio-current-site-300w.png';
import project02_520 from '../images/portfolio/svtdh-portfolio-current-site-520w.png';
import project03_460 from '../images/portfolio/svtdh-portfolio-swapi-460w.png';
import project03_720 from '../images/portfolio/svtdh-portfolio-swapi-720w.png';
import project03_300 from '../images/portfolio/svtdh-portfolio-swapi-300w.png';
import project03_520 from '../images/portfolio/svtdh-portfolio-swapi-520w.png';

import project01_460wp from '../images/portfolio/svtdh-portfolio-calculate-price-460w.png?as=webp';
import project01_720wp from '../images/portfolio/svtdh-portfolio-calculate-price-720w.png?as=webp';
import project01_300wp from '../images/portfolio/svtdh-portfolio-calculate-price-300w.png?as=webp';
import project01_520wp from '../images/portfolio/svtdh-portfolio-calculate-price-520w.png?as=webp';
import project02_460wp from '../images/portfolio/svtdh-portfolio-current-site-460w.png?as=webp';
import project02_720wp from '../images/portfolio/svtdh-portfolio-current-site-720w.png?as=webp';
import project02_300wp from '../images/portfolio/svtdh-portfolio-current-site-300w.png?as=webp';
import project02_520wp from '../images/portfolio/svtdh-portfolio-current-site-520w.png?as=webp';
import project03_460wp from '../images/portfolio/svtdh-portfolio-swapi-460w.png?as=webp';
import project03_720wp from '../images/portfolio/svtdh-portfolio-swapi-720w.png?as=webp';
import project03_300wp from '../images/portfolio/svtdh-portfolio-swapi-300w.png?as=webp';
import project03_520wp from '../images/portfolio/svtdh-portfolio-swapi-520w.png?as=webp';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('list-projects.0.title'),
      description: t('list-projects.0.description'),
      image: project01_460,
      mediumImage: project01_720,
      smallImage: project01_520,
      extraSmallImage: project01_300,
      imageWp: project01_460wp,
      mediumImageWp: project01_720wp,
      smallImageWp: project01_520wp,
      extraSmallImageWp: project01_300wp,
      tools: 'html5, css3, javascript',
      gitLink: 'https://github.com/urbanlol/calculate-price',
      demoLink: 'https://urbanlol.github.io/calculate-price',
    },
    {
      title: t('list-projects.1.title'),
      description: t('list-projects.1.description'),
      image: project02_460,
      mediumImage: project02_720,
      smallImage: project02_520,
      extraSmallImage: project02_300,
      imageWp: project02_460wp,
      mediumImageWp: project02_720wp,
      smallImageWp: project02_520wp,
      extraSmallImageWp: project02_300wp,
      tools: 'html5, css3, javascript, react js',
      gitLink: 'https://github.com/urbanlol/portfolio',
      demoLink: 'https://portfolio-sigma-woad-26.vercel.app/',
    },
    {
      title: t('list-projects.2.title'),
      description: t('list-projects.2.description'),
      image: project03_460,
      mediumImage: project03_720,
      smallImage: project03_520,
      extraSmallImage: project03_300,
      imageWp: project03_460wp,
      mediumImageWp: project03_720wp,
      smallImageWp: project03_520wp,
      extraSmallImageWp: project03_300wp,
      tools: 'javascript, react js, material UI react',
      gitLink: 'https://github.com/urbanlol/star-wars-api',
      demoLink: 'https://star-wars-api-psi.vercel.app/',
    },
  ];

  return projects;
}

export default Projects;
