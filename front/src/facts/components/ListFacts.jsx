import React from 'react';
import { CHTable } from '../../common/components/CHTable';
import { Row, Col } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';
import _ from 'lodash';

export class ListFacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteFacts: [],
        };
    }

    componentDidMount() {
        let favourites = localStorage.getObject('favourites');
        if (favourites) {
            this.setState({ favouriteFacts: favourites })
        }
    }

    componentDidUpdate() {

    }

    getHeaderResultList = () => {
        let headers = ["Facts", "Actions"];
        return headers;
    }

    saveFavourites = (index) => {
        let favourites = localStorage.getObject('favourites');
        let factToSave = this.props.factsFound[index];
        if (favourites) {
            if (!_.find(favourites, x => x.value === factToSave.value)) {
                favourites.push(factToSave);
            }
        }
        else {
            favourites = [factToSave];
        }
        localStorage.setObject('favourites', favourites);
        this.setState({ favouriteFacts: favourites });
    }

    getItemsFavouriteList = () => {
        let favourites = this.state.favouriteFacts;
        if (favourites) {
            let items = _.map(favourites, fact => [fact.value]);
            return items;
        }
        else {
            return [];
        }
    }

    getItemsResultList = () => {
        let items = this.props.factsFound || [];
        let iconEmpty = (index) => <Star
            onClick={() => {
                this.saveFavourites(index)
            }}
        />
        let iconFill = <StarFill/>
        items = _.map(items, (fact, index) => (
            [fact.value, _.find(this.state.favouriteFacts, x => x.value === fact.value) ?  iconFill : iconEmpty(index) ]));
        return items;
    }

    render() {
        return (
            <Row style={{ height: "calc(100vh - 188px)" }}>
                <Col style={{ height: "100%" }}>
                    <Row>
                        <Col>
                            <h5 style={{ textAlign: "left" }}>Favorite Facts:</h5>
                        </Col>
                    </Row>
                    <Row style={{ height: "calc(100% - 32px)" }}>
                        <Col style={{ height: "100%", overflowY: "auto" }}>
                            <CHTable headers={["Facts"]} items={this.getItemsFavouriteList()} />
                        </Col>
                    </Row>
                </Col>

                <Col style={{ height: "100%" }}>
                    <Row>
                        <Col>
                            <h5 style={{ textAlign: "left" }}>Result Facts:</h5>
                        </Col>
                    </Row>
                    <Row style={{ height: "calc(100% - 32px)" }}>
                        <Col style={{ height: "100%", overflowY: "auto" }}>
                            <CHTable headers={this.getHeaderResultList()} items={this.getItemsResultList()} />
                        </Col>
                    </Row>
                </Col>
            </Row>);
    }
}