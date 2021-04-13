import {Component} from 'react'

class SwitchView extends Component {
    constructor(){
        super()
        this.state = {
            isOn: false
        }
    
    }

    handleSwitch = () => {
        this.setState({
            //toggles the switch to opposite
            isOn: !this.state.isOn
        })
    }
    render() {
        return (
            <button onClick={this.handleSwitch}>{this.state.isOn ? "ON" : "OFF"}</button>
        )
    }
}

export default SwitchView