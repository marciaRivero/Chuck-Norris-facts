import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { CHButton } from "./CHButton";

export class CHSearcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div style={{}}>
                <InputGroup className="mb-3">
                    <FormControl
                        type='text'
                        name='fact'
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange.bind(this)}
                    />
                    <InputGroup.Append>
                        <CHButton variant={this.props.variant} text={this.props.text} onClick={() => this.props.onClick(this.state.value)} />
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}