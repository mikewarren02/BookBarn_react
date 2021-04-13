import { Component } from "react";


export class Story_one extends Component {
    

    render(){
        const likes = this.props.story[0].likes
        const comment = this.props.story[0].comments
        const story = this.props.story[0]

        return(
            <div className="story">
                <h2>{story.header}</h2>
                <br></br>
                <p>{story.info}</p>
                <p className= "stats">Likes: {likes}  Comments: {comment}</p>
            </div>
        )
    }
}


export class Story_two extends Component {

    render(){
        const likes = this.props.story[1].likes
        const comment = this.props.story[1].comments
        const story = this.props.story[1]
        return(
            <div className="story">
                <h2>{story.header}</h2>
                <br></br>
                <p>{story.info}</p>
                <p className= "stats">Likes: {likes}  Comments: {comment}</p>

            </div>
        )
    }
}



