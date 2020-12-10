import React, {Component} from 'react';

class CarComponent extends Component {


    render() {

        let {car} = this.props;

        return (
            <div>
                {car.age}-{car.brand}-{car.motor};
            </div>
        );
    }
}

export default CarComponent;