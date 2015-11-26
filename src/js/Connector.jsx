import React from 'react';
// definice zakladnich promennych a metod pro pristup k webspeed programu
// (autorizace, generovani 2 zakladnich tt)
import gener from 'gener';

// zejmena kvuli spravne funkci 'this'; sablona pro tridy
import BaseComponent from 'BaseComponent';
import Canvas from './Canvas.jsx';

//var program = 'gener65/browse.i';

class Connector extends BaseComponent {
  constructor() {
      super();
      this.state = {
        employeeCount: []
      };
  }

  componentDidMount() {
    // url - adresa webspeed programu (procedury) na serveru; slozka w_s
    // program - nazev programu, ktery je vytazen z DB
    // options - struktura pro prijata dataP

      var url = 'http://kryton/cgi-bin/wspd_cgi.sh/swgetdat';
      var jsonData = '';

      gener.setLogin('vaso', '2222', 'apso');

      gener.sendRequest(
        url,
        (data) => {
            jsonData = gener.getParam(data, 'ttZame');

            /*
            var className = Object.prototype.toString.call(this.state).slice(8, -1);
            console.log('Typ: ' + className);
            */

            this.setState({employeeCount: jsonData});
        }
      );
  }

  render() {
      var index = 0;
      var nodes = this.state.employeeCount.map(function mapNumberToComponent(obj) {
          index = index + 1;

          return (
            <Canvas index={index} obd={obj.obd} poc={obj.poc} />
          );
      });

      return (
      <div>
        <h2>{this.props.label}</h2>
        Connector text...
        <br /><br />
        <hr />
        {nodes}
        <hr />
      </div>
    );
  }
}

Connector.propTypes = {
  label: React.PropTypes.string
};

Connector.defaultProps = {
  label: ''
};

export default Connector;
