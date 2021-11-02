import React, { Component } from 'react';
import Parameter from './Parameter'

class ApiMethodParameters extends Component {

  render() {
    
    let method = this.props.method;
    let urlParams = this.props.urlParams;
    
    if(method.params) {
        const methodParamerItems = method.paramNames.map((parameterName) =>
            
            <Parameter param={method.params[parameterName]} onChange={this.props.onChange} urlParams = {urlParams} paramValues = {this.props.paramValues}/>
        );
        
        return (
        <div>
            {methodParamerItems}
        </div>
        );
    } else {
        return (<div/>);
    }
  }
}

export default ApiMethodParameters;
