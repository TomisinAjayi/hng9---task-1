import React from "react";
import './css/Links.css';

const Links = () => {

    return (
        <div>
            <div className="links">
                <p><a href="https://twitter.com/tomiajayi_" id="twitter">Twitter Link</a></p>
                <p><a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a></p>
                <p><a href="http://books.zuri.team" id="books">Zuri Books</a></p>
                <p><a href="https://books.zuri.team/python-for-beginners?ref_id=TomisinAjayi" id="book__python">Python Books</a></p>
                <p><a href="https://background.zuri.team" id="pitch">Background Check for Coders</a></p>
                <p><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></p>
            </div>
            <div>slack</div>
        </div>
    );
}

export default Links;