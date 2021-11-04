import React, { Component, } from 'react';
import { Link, } from 'react-router-dom';
import { ListGroup, ListGroupItem, } from 'react-bootstrap';

class ApiMethods extends Component {
    getTarget(api, method) {
        return '/api/' + api + '/' + method;
    }

    render() {
        let methods = Object.keys(this.props.methods);
        methods.sort((a, b) => {
            if (a == b) return 0;
            if (a < b) return -1;
            return 1;
        });

        const methodItems = methods.map((methodName) =>
            <ListGroupItem>
                <Link to={this.getTarget(this.props.api, methodName)}>{methodName}</Link>
            </ListGroupItem>
        );

        return (
            <ListGroup>
                {methodItems}
            </ListGroup>
        );
    }
}

export default ApiMethods;
