import React, { Component } from 'react'
import LocationDropDown from './LocationDropDown';

export default class LocationSelectForm extends Component {

    provinces = [
        {
            name: 'กรุงเทพ', id: 1, districts: [
                {
                    name: 'บางรัก', id: 1, khwangs: [
                        { name: 'บางรัก' },
                        { name: 'สีลม' }
                    ]
                },
            ]
        },
        {
            name: 'นนทบุรี', id: 2, districts: [
                {
                    name: 'เมืองนนทบุรี', id: 1, khwangs: [
                        { name: 'บางไผ่' },
                        { name: 'ท่าทราย' },
                        { name: 'สวนใหญ่' }
                    ]
                },
                {
                    name: 'บางกรวย', id: 2, khwangs: [
                        { name: 'บางขนุน' },
                        { name: 'ศาลากลาง' }
                    ]
                }
            ]
        }
    ]


    render() {
        return (
            <div>
                 <LocationDropDown defaultLabel="จังหวัด" locations={this.provinces}/><br/>
                 <LocationDropDown defaultLabel="อำเภอ" locations={this.provinces}/><br/>
                 <LocationDropDown defaultLabel="ตำบล" locations={this.provinces}/>
            </div>
        )
    }
}
