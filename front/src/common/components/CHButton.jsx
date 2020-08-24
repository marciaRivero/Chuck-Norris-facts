import React from 'react';
import Button from 'react-bootstrap/Button';

export class CHButton extends React.Component {
    render() {
      return <Button variant={this.props.variant} onClick ={e => this.props.onClick()}>{this.props.text}

      </Button>;
    }
  }