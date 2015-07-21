import React from 'react';
// definice zakladnich promennych a metod pro pristup k webspeed programu
// (autorizace, generovani 2 zakladnich tt)
import gener from 'gener';

// zejmena kvuli spravne funkci "this"; sablona pro tridy
import BaseComponent from 'BaseComponent';

class Connector extends BaseComponent {
    constructor() {
        super();
    }

    componentDidMount() {
        // url - adresa webspeed programu (procedury) na serveru; slozka w_s
        // program - nazev programu, ktery je vytazen z DB
        // options - struktura pro prijata data

        var url = 'http://kryton/cgi-bin/wspd_cgi.sh/dwgetgst';

        gener.setLogin('vaso', '2222', 'apso');

        gener.sendRequest(url, function processData(data) {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <h2>{this.props.label}</h2>
                Connector text...
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
