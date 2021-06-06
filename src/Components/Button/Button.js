import { Component} from 'react';
import "./Styles.css";
class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <button
         className={this.props.isPurple?
        "background-button":"btn"
    }
        onClick={this.props.handelClick}
>
            {this.props.text}

        </button>

        );
        }
        }
        export default Button;



