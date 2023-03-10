import React, { Component } from 'react'

export default class NewsItem extends Component {

    render(props) {
        let { title, descriptions } = this.props;
        return (
            <div>

                <h2>{title}</h2>
                <h2>{descriptions}</h2>
            </div>
        )
    }
}
