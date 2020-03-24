import React, { Component, Fragment } from 'react';
import FilmList from './FilmList';
import DrinkList from './DrinkList';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                 <h1>React Routes Lecture</h1>
                <div className='container'>
                <div className='films'>
                    <FilmList />
                </div>
                <div className='drinks'>
                    <DrinkList />
                </div>
                </div>
               
                


            </Fragment>
        );
    }
}

export default AppContainer;