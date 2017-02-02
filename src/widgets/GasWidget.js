import React, { Component } from 'react';
import GenericWidget from './GenericWidget';
//import './GasWidget.css';

class GasWidget extends Component {

  render() {
    return (
      <GenericWidget class="GasWidget"
          icon="whatshot"
          isOn={Number(this.props.usage) > 0 }
          value1={(Number(this.props.usage).toFixed(0) / 1000) + ' m3'}
          {...this.props} />
    );
  }

}

export default GasWidget
