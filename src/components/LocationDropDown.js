import React, { Component } from 'react'

export default class LocationDropDown extends Component {
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
                    จังหวัด
              </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        locations.map((location, index)=>{
                           return <a key={location.id} data-id={location.id} data-name={location.name} class="dropdown-item" href="#">{location.name}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}
