import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

export class CHDropDown extends React.Component {
    render() {
        return (
            <DropdownButton
                id={`dropdown-variants-${this.props.variant}`}
                title={this.props.text}
                variant={this.props.variant.toLowerCase()}
                onSelect={(eventKey, _) => this.props.onSelect(eventKey)}
            >
                {
                    this.props.items ?
                        this.props.items.map((element, index) =>
                            <Dropdown.Item key={index} eventKey={element.key}>{element.value}</Dropdown.Item>
                        )
                        : null
                }
            </DropdownButton>
        )
    }
}

