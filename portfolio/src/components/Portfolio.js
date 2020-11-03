import React from "react";
import Card from "./Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SocioPod from "../assets/sociopod.png"
import Travel from "../assets/travel.png";
import Burger from "../assets/burger.png";
import weather from "../assets/weather-api.png"
import notes from "../assets/notes.png";
import workout from "../assets/workout.png";

class Portfolio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "SocioPod",
                    subtitle: "An app that generates 30 podcasts based on users interests",
                    imgSrc: SocioPod,
                    link: "https://vast-scrubland-76826.herokuapp.com/",
                    repo: "",
                    selected: false
                },
                {
                    id: 1,
                    title: "Masked Wanderer",
                    subtitle: "An app that provides cheap flights as well as recent COVID stats at destination.",
                    imgSrc: Travel,
                    link: "https://nataliegarcia-8.github.io/Domestic-Covid19-TravelApp/",
                    repo: "",
                    selected: false
                },
                {
                    id: 2,
                    title: "Eat da Burger",
                    subtitle: "A basic node, express, handlebars, & MySQL backed app.",
                    imgSrc: Burger,
                    link: "https://desolate-stream-81871.herokuapp.com/",
                    repo: "",
                    selected: false
                },
                {
                    id: 3,
                    title: "Weather.com API",
                    subtitle: "A basic front end app that allows users to find weather forcasts by city.",
                    imgSrc: weather,
                    link: "https://mjstalzer.github.io/Weather-API-Project/",
                    repo: "",
                    selected: false
                },
                {
                    id: 4,
                    title: "Note Taker",
                    subtitle: "A basic note taking app built using express.",
                    imgSrc: notes,
                    link: "https://mysterious-sierra-11038.herokuapp.com/",
                    repo: "",
                    selected: false
                },
                {
                    id: 5,
                    title: "Fitness Tracker",
                    subtitle: "An app that allows for creating, updating, and tracking user created workouts.",
                    imgSrc: workout,
                    link: "https://still-crag-00122.herokuapp.com/",
                    repo: "",
                    selected: false
                }
            ]
        };
    };

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    };
};

export default Portfolio;