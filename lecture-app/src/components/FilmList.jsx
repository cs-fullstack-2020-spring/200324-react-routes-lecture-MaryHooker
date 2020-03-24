import React,{Component, Fragment} from 'react';

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filmList:[],
         }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = async() =>{
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const json = await response.json();
        //formatter to organize objects on array of fetched info in the console
        console.table(json)
        this.setState(
            {
                filmList: json
            }
        )

    }

    render() { 
        return ( 
            <Fragment>
                <h2 className='header'>Studio Ghibli Films</h2>
                {
                    this.state.filmList.map((film) =>{ return(
                        <div key={film.id}>
                            <p><span className='span'>Film Name:</span> {film.title}</p>
                            <p><span className='span'>Film Description:</span> {film.description}</p>
                            <hr className='breaks'/>

                        </div>
                    )

                    }

                    )
                }
            </Fragment>
         );
    }
}
 
export default FilmList;