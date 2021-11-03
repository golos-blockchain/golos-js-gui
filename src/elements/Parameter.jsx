import React, { Component } from 'react';
import ArrayParameter from './ArrayParameter';
import ObjectParameter from './ObjectParameter';

import { FormControl, FormGroup, ControlLabel, } from 'react-bootstrap';

class Parameter extends Component {
    constructor() {
        super();
        this.state = { count : 1, };
    }

    render() {
        let paramValues = this.props.paramValues;
        function getValue(name) {
            if (paramValues[name] && paramValues[name] !== '') {
                return paramValues[name];
            }
            return '';
        }

        const { param, } = this.props;

        let input = null;
        console.log('Parameter ' + param.name + ' of type [' + param.type + ']');
        switch (param.type) {
        case 'Array':
            input = <ArrayParameter paramValues={paramValues}
                onChange={this.props.onChange} param={param}
                getValue={getValue}
            />;
            break;
        case 'Object':
            input = <ObjectParameter paramValues={paramValues}
                onChange={this.props.onChange} param={param}
                getValue={getValue}
            />;
            break;
        default:
            input = <FormGroup>
                <ControlLabel>{param.disp_name}</ControlLabel>
                <FormControl 
                    placeholder={param.default} 
                    type='text' 
                    name={param.name} 
                    onChange={this.props.onChange} 
                    value = {getValue(param.name)}/>
            </FormGroup>;
        }

        return (<div>{input}</div>);
    }
}

export default Parameter;
