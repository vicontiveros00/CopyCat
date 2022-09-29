import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

class CopyCat extends React.Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>{this.props.name ? this.props.name : 'Copy Cat'}</h1>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <img 
          alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
          style={styles.imgStyle}
        />
        <p>{this.props.copying && this.props.input}</p>
      </div>
    );
  };
}

export default CopyCat;

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleTape: PropTypes.func.isRequired,
  copying: PropTypes.bool.isRequired,
  name: PropTypes.string
}