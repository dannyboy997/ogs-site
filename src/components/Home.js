import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div class="page-header">
                    Home
                </div>
                <div class="page-content">
                    <p>
                        Welcome to Open Game Studios (OGS). We are a small game studio powered and driven by a community of developers and gamers.
                    </p>
                    <p>
                        We're not sure what were building yet and thats why it's a great time to get on board and help drive the direction of our games.
                    </p>
                    <h3>Open</h3>
                    <p>
                        We are completly open source. This means a couple things. First, we're not in complete control, you are. Second, if you have an idea, find an issue of just want to explore around; 
                        jump in and do it! We use github so all the tool your familiar with will just work. We're so open source even this site is open to community.
                    </p>
                    <p>
                        <ul>
                            <li>This Site - <a href="https://github.com/dannyboy997/ogs-site">GitHub</a></li>
                            <li>First Game - Snowflake - <a href="https://github.com/dannyboy997/ogs_game_snowflake">GitHub</a></li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;