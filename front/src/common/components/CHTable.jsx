import React from 'react';
import Table from 'react-bootstrap/Table';

export class CHTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.items) {
            return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.props.headers.map((element, index) =>
                                <th key={index}>{element}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((element,index) =>
                            <tr key={index}>
                                {element.map((field, index) =>
                                    <td key={index}>{field}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </Table>)
        }
        else return null;
    }
}