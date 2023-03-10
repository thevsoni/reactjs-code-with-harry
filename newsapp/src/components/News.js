import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("hello i am a constructoor from newsj.js");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-02-08&sortBy=publishedAt&apiKey=0e51a3979f184d228e2b4824c439ca82";
        let data = await fetch(url);
        let parseData = await data.json();
        // this.setState({ articles: parseData.articles });
        this.setState({ articles: parseData.articles });
        console.log(parseData.totalResults);

    }
    handleLeft = async (data) => {

    }
    async handleRight(data) {

    }

    a = "vishal";
    render() {
        const { apple, ball } = this.props;

        return (
            <div className='container' style={{ display: "flex", "maxwidth": "100%", flexWrap: "wrap" }}>
                <div>
                    <h4>{this.a}</h4>
                </div>
                News component

                {this.state.articles && this.state.articles.map((element) => {
                    // console.log(element)
                    return <div style={{ width: "10rem", backgroundColor: "green", margin: "2rem" }} key={element.url}>
                        {element.author}
                        <div>
                            <img src={element.urlToImage} style={{ height: "calc(100% / 2)", width: "calc(100% / 2)" }} alt="unable to upload" />
                            {element.description}
                        </div>

                    </div>
                })}

                {/* <NewsItem title="1st title" descriptions="1st description" />
                <NewsItem title="2nd title" descriptions="2nd description" />
                <NewsItem title="3rd title" descriptions="3rd description" /> */}
                <h4>{apple}</h4>
                <h4>{ball}</h4>
            </div>
        )
    }
}

export default News