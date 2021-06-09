import"./Styles.css";
import Button from "../Button/Button";

function ListItem(props){
        return(
        <div className="list-item">
           <span className="task-title"
           >
           {props.task}
           </span>
        <Button
            className="background-button"
            text="delete"
            isPurple={true}
            handelClick={props.handelDelete}
        />
        </div>
        );
        }
        export default ListItem;



