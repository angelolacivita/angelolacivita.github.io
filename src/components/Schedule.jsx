import React from 'react';
import './styles/Schedule.css';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='schedule' className='schedule'>
                <div className='schedule-title'>
                    <h1>Schedule</h1>
                </div>

                <div className='schedule-section-1'>
                    <div className='schedule-left'>
                        <h2>Feb 2, 2023</h2>
                        <h3>Thursday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h3>Welcome Party</h3>
                        <h3>6-8pm</h3>
                    </div>
                </div>
                <div className='schedule-section-2'>
                    <div className='schedule-left'>
                        <h3>Feb 3, 2023</h3>
                        <h3>Friday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h3>Rehearsal Dinner</h3>
                        <h3>12-2pm</h3>

                        <h3>Catamaran at the Docs</h3>
                        <h3>3-5pm</h3>
                    </div>
                </div>
                <div className='schedule-section-3'>
                    <div className='schedule-left'>
                        <h3>Feb 4, 2023</h3>
                        <h3>Saturday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h3>Ceremony at Key West Beach</h3>
                        <h3>3-4pm</h3>

                        <h3>Cocktail Reception at Key West Infinity Pool</h3>
                        <h3>4-5pm</h3>

                        <h3>Wedding Reception at Key West Beach</h3>
                        <h3>5pm</h3>
                    </div>
                </div>
            </div>
        );
    }
}
