import React, {Component} from 'react';

class App extends Component {

    car = [
        {age:2015,brand:"audi",motor:2.0},
        {age:2014,brand:"chepurka",motor:5.0},
        {age:2016,brand:"calina",motor:1.5},
        {age:2017,brand:"m3",motor:2.4},
        {age:2018,brand:"priora",motor:1.8},
        {age:2019,brand:"porshe",motor:2.5},
        {age:2020,brand:"lada",motor:2.0},
        {age:2013,brand:"bmw",motor:10.0},
    ]


    render() {
        return (
            <div>
                {
                   this.car.map(car =><h3>{car.age}-{car.brand}-{car.motor}</h3>)
                }
            </div>
        );
    }
}

export default App;
