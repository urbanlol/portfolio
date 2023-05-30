import { useTranslation } from 'react-i18next';

function Project(props) {
  const {
    title,
    description,
    image,
    mediumImage,
    smallImage,
    extraSmallImage,
    imageWp,
    mediumImageWp,
    smallImageWp,
    extraSmallImageWp,
    tools,
    gitLink,
    demoLink,
  } = props.project;
  const { t } = useTranslation();

  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-12">
          <div className="card">
            <div className="row">
              <div className="col-lg-6">
                <picture>
                  <source
                    media="(min-width: 1300px)"
                    srcSet={imageWp}
                    type="image/webp"
                    width={460}
                    height={460}
                  />
                  <source
                    media="(min-width: 1300px)"
                    srcSet={image}
                    type="image/png"
                    width={460}
                    height={460}
                  />
                  <source
                    media="(min-width: 520px)"
                    srcSet={mediumImageWp}
                    type="image/webp"
                    width={720}
                    height={720}
                  />
                  <source
                    media="(min-width: 520px)"
                    srcSet={mediumImage}
                    type="image/png"
                    width={720}
                    height={720}
                  />
                  <source
                    media="(min-width: 320px)"
                    srcSet={smallImageWp}
                    type="image/webp"
                    width={520}
                    height={520}
                  />
                  <source
                    media="(min-width: 320px)"
                    srcSet={smallImage}
                    type="image/png"
                    width={520}
                    height={520}
                  />
                  <source
                    media="(max-width: 319px)"
                    srcSet={extraSmallImageWp}
                    type="image/webp"
                    width={300}
                    height={300}
                  />
                  <source
                    media="(max-width: 319px)"
                    srcSet={extraSmallImage}
                    type="image/png"
                    width={300}
                    height={300}
                  />
                  <img
                    src={imageWp}
                    alt={`Portfolio - ${title}`}
                    title={`Portfolio - ${title}`}
                    loading="lazy"
                    width={460}
                    height={460}
                  />
                </picture>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title m-0">{title}</h5>
                  <p className="card-text">
                    {description}
                    <br />
                    <br />
                    <b>Tools:</b>{' '}
                    <span style={{ textTransform: 'uppercase' }}>{tools}</span>
                  </p>
                  <div className="d-flex mt-3">
                    {gitLink && (
                      <div className="pr-1 w-50">
                        <a
                          href={gitLink}
                          className="btn btn-info w-100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                    )}
                    {demoLink && (
                      <div className="pl-1 w-50">
                        <a
                          href={demoLink}
                          className="btn btn-success w-100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t('demo')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
