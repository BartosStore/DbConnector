import React from 'react';
import BaseComponent from 'BaseComponent';

class TestBoy extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.label}</h2>
            </div>
        );
    }
}

TestBoy.propTypes = {
    label: React.PropTypes.string
};

TestBoy.defaultProps = {
	label: ''
};

export default TestBoy;
