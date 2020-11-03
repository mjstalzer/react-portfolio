import React from "react";
import Card from "./Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import git from "../assets/weather-api.png"
import me from "../assets/propic.png";
import linked from "../assets/in.png";
import resume from "../assets/resume.pdf"

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Git Hub Profile",
                    subtitle: "Check out my Git Hub repos!",
                    imgSrc: git,
                    link: "https://github.com/mjstalzer",
                    selected: false
                },
                {
                    id: 1,
                    title: "The Resume",
                    subtitle: "Check out my resume!",
                    imgSrc: me,
                    link: resume,
                    selected: false
                },
                {
                    id: 2,
                    title: "LinkedIn Profile",
                    subtitle: "Connect with me!",
                    imgSrc: linked,
                    link: "https://www.linkedin.com/in/matt-stalzer73638",
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

export default Carousel;