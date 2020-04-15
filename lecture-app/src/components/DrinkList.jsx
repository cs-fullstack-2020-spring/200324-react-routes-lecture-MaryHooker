import React,{Component, Fragment} from 'react';

class DrinkList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            drinkList:[],
         }
    }
    componentDidMount(){
        this.loadData();
    }

    loadData = async() =>{
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const json = await response.json();
        console.table(json.drinks);
        this.setState(
            {
                drinkList: json.drinks
            }
        )
    }
    render() { 
        return ( 
            <Fragment>
                <h2 className='header'>Cocktails</h2>
                {
                    this.state.drinkList.map((drink)=>{
                        return(
                            <div key={drink.idDrink}>
                                <p><span>Drink Name:</span> {drink.strDrink}</p>
                                <p><span>Description:</span> {drink.strInstructions}</p>
                                <hr/>
                            </div>
                        )
                    }

                    )
                }
            </Fragment>
         );
    }
}
 
export default DrinkList;