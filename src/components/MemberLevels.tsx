import React, { Component } from "react";

class MemberLevels extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    Member Levels
                </div>
                <div className="page-content">
                    <h2>Board</h2>
                    <p>
                        These member are entrusted with direction and ensuring the communities needs are being fulfilled.
                        <ul>
                            <li>Merge code in case of emergency checkins, ensuring community wishes are still being honored.</li>
                        </ul>
                    </p>
                    <h2>Operators</h2>
                    <p>

                    </p>
                    <h2>Contributors</h2>
                    <p>
                        These members have active contributions.
                    </p>
                    <h2>Insiders</h2>
                    <p>
                        These member get to see everything, comment and vote on issues.
                    </p>
                </div>
            </div>
        );
    }
    
}

export default MemberLevels;