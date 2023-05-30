import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Project from './Project';
import projectArray from '../../datas/data-projects';

function Projects() {
  const { t, i18n } = useTranslation();
  const projects = projectArray()
  
  return (
    <>
      <Helmet htmlAttributes={{lang: i18n.resolvedLanguage}}>
        <title>SVTDH - {t('Projects')}</title>
        <meta name="description" content={t('projects-description')} />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section id="projects" className="section-padding about-area bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2>{t('Projects')}</h2>
                <p>
                  {t('project-page-descript')}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 project-list">
              {projects.map((project, i) => (
                <Project key={i + 1} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
