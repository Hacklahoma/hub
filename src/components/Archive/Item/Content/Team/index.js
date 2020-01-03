import React from 'react'
import './index.scss'
import Member from './Member'

class Team extends React.Component {
    render() {
        return(
            <div className="Team">
                <h1>Meet the Team</h1>
                <div className="wrapper">
                    <div className="team">
                        {Object.keys(this.props.team).map((key) =>
                            <Member key={key} 
                                    name={key} 
                                    image={this.props.team[key].image}
                                    position={this.props.team[key].position} 
                                    instagram={this.props.team[key].instagram} 
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team