import React from 'react';
import { CHButton } from "./../../common/components/CHButton";
import { getFactRandomly, getCategories, getFactByCategory, getFactByText } from "./../actions";
import { CHDropDown } from "../../common/components/CHDropDown";
import { CHSearcher } from "../../common/components/CHSearcher";
import { Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import { ListFacts } from './ListFacts';

export class GetFacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            factsFound: undefined
        };
    }

    componentDidMount() {
        getCategories().then(response => {
            let categories = _.map(response.data, (cat) => ({ key: cat, value: cat }))
            this.setState({ categories })
        })
    }

    onSelectCategory = (category) => {
        getFactByCategory(category).then(response => {
            if (response) {
                this.setState({ factsFound: [response.data] })
            }
        })
    }

    onClickSearcher = (text) => {
        getFactByText(text).then(response => {
            if (response) {
                this.setState({ factsFound: response.data.result })
            }
        }
        )
    }

    render() {
        return (
            <Container>
                <div style={{ textAlign: "center" }}>
                    <h1>Chuck Norris facts</h1>
                    <p> Get a fact: </p>
                    <Row>
                        <Col>
                            <CHSearcher
                                variant={"info"}
                                text={"Search by text"}
                                placeholder={"Write something to search a fact"}
                                onClick={(text) => this.onClickSearcher(text)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CHButton variant={"info"} text={"Randomly"} onClick={() => getFactRandomly().then(response => { this.setState({ factsFound: [response.data] }) })} />
                        </Col>
                        <Col>
                            <CHDropDown variant={'Info'} text={"Choose category"} items={this.state.categories} onSelect={(category) => this.onSelectCategory(category)} />
                        </Col>
                    </Row>
                    <ListFacts factsFound={this.state.factsFound}
                        removeFact={(index) => {
                            let facts = this.state.factsFound;
                            _.remove(facts, (fact, factIndex) => { return factIndex === index });
                            this.setState({ factsFound: facts })
                        }} />
                </div>
            </Container>
        )
    }
}