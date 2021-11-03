import React, { Component, } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, } from 'react-bootstrap';

class ObjectParameter extends Component {
    constructor() {
        super();
        this.state = { error: null, };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;

        try {
            this.props.onChange(event);
            JSON.parse(value);
            if (this.state.error) {
                this.setState({ error: null, });
            }
        } catch(e) {
            this.setState({ error: e.toString(), });
        }
    };

    render() {
        let getValue = this.props.getValue;

        let { param, } = this.props;

        let error = null;
        if (this.state.error) {
            error = <div className='Parameter-error'>
                {this.state.error}
            </div>;
        }

        return (<FormGroup>
            <ControlLabel>
                {param.disp_name}
            </ControlLabel>
            <FormControl componentClass='textarea' 
                name={param.name} 
                placeholder={param.default}
                maxRows={5} 
                onChange={this.onChange} 
                value={getValue(param.name)}>
            </FormControl>
            {error && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>);
    }
}

export default ObjectParameter;
