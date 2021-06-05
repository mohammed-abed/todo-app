import { Component} from 'react';
import"./Styles.css";
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

        <Button text="delet" isPurple={true}>
              

        </Button>
        </div>

        );
        }
        }
        export default HomeScreen;



