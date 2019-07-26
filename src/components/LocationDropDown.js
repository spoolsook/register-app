import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    state = {
        label : this.props.defaultLabel
    }

    locationSelected(e) {
        console.log(e.target);

        let locationName = e.target.getAttribute('data-name');
        console.log(locationName);

        this.setState({
            label : locationName
        })
    }

    render() {
        // return (
        //     <div>
        //         Hello Location Drop Down
        //     </div>
        // )

        let locations = this.props.locations;

        return (
            <div class="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {this.state.label}
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        locations.map((location, index) => {
                            return (
                                <div>
                                    <a key={location.id} 
                                    data-id={location.id} 
                                    data-name={location.name} 
                                    onClick={e=>this.locationSelected(e)}
                                    class="dropdown-item" href="#">{location.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
