import React from 'react';
// definice zakladnich promennych a metod pro pristup k webspeed programu
// (autorizace, generovani 2 zakladnich tt)
/*import gener from 'gener';*/

// zejmena kvuli spravne funkci "this"; sablona pro tridy
import BaseComponent from 'BaseComponent';

class Canvas extends BaseComponent {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
      console.log('canvas');

      return (
        <div>
          <h2>I am canvas number {this.props.index}</h2>
          Canvas text...
          <br />
          Obdobi: {this.props.obd}
          <br />
          Pocet: {this.props.poc}
        </div>
      );
  }
}

Canvas.propTypes = {
  obd: React.PropTypes.string,
  poc: React.PropTypes.string,
  index: React.PropTypes.integer
};

Canvas.defaultProps = {
  obd: '',
  poc: '',
  index: 0
};

export default Canvas;
