import React, { Component } from 'react'
import LocationDropDown from './LocationDropDown';

export default class LocationSelectForm extends Component {

    state = {}

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

    selectedProvince = (provinceName) => {
        console.log('เลือกจังหวัด: ' + provinceName);

        let chosenProvice = this.provinces = this.provinces.find(province => {
            return province.name === provinceName;
        })

        this.setState({
            selectedProvince:chosenProvice
        })
    }

    selectedDistrict = (districtName) => {
        console.log('เลือกเขต/อำเภอ ${districtName}');

        let chosenDistrict = this.state.selectedProvince.districts.find(district => {
            return district.name === districtName
        })

        this.props.locationData.district = chosenDistrict.name;

        this.setState({
            selectedDistrict: chosenDistrict
        });
    }

    render() {

        let districtDropDown;
        let khwangDropDown;

        if(this.state.selectedProvince){
            let districts = this.state.selectedProvince.districts;
            console.log(districts);
            districtDropDown = <LocationDropDown defaultLabel="เขต/อำเภอ" locations={districts} selectedCallback={this.selectedDistrict}/>
        }

        if(this.state.selectedDistrict) {
            let khwangs = this.state.selectedDistrict.khwangs;
            khwangDropDown = <LocationDropDown defaultLabel="แขวง/ตำบล" locations={khwangs}/>
        }

        return (
            <div>
                <LocationDropDown defaultLabel="จังหวัด" selectedCallback={this.selectedProvince} locations={this.provinces} /><br />
                {districtDropDown}
                {khwangDropDown}
            </div>
        )
    }
}
