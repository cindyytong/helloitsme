import React from "react";
import { Link } from "react-router-dom";

class SectionItem extends React.Component {
    render(){
        const {section} = this.props;
        return(
            <>
                <p>{section.text}</p>
                <p>Contributor: {section.author.handle}</p>
                <p>Created On: {section.created_at}</p>
            </>
        )
    }
}

export default SectionItem;