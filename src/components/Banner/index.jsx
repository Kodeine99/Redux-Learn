import PropTypes from 'prop-types'
import React from 'react'
import './Banner.scss';

const Banner = (props) => {
  const { title, backgroundUrl } = props;
  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {}
  return (
    <div>
      <section className="banner" style={bannerStyle}>
        <h1 className="banner__title">{title}</h1>
      </section>
    </div>
  )
}

export default Banner
Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};
Banner.defaultProps = {
  title: '',
  backgroundUrl: '',
}
