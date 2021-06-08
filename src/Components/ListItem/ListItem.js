import { Component} from 'react';
import"./Styles.css";
import Button from "../Button/Button";
class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div className="list-item">
           <span className="task-title"
           >
               {this.props.task}
           </span>

        <Button className="background-button"
            text="delete"
                isPurple={true}
            handelClick={this.props.handelDelete}

        />



        </div>

        );
        }
        }
        export default ListItem;



