import { Component} from 'react';
import"./Styles.css";
import Button from '../../Components/Button/Button';
import {data} from '../../data';
import ListItem from'../../Components/ListItem/ListItem'
class HomeScreen extends Component {
    render() {

        return(
        <div className="inner-container">       
           <h1 className="page-title">Home Screen</h1>

        <section className="input-section">
            <input
            className="add-task"
            type="text"
            placeholder="enter task"/>

            <Button className="btn"
                    text="Add"
                    handelClick={()=>{}}
            />
        </section>


        <section
            className="item-section" >
               {data.map(item=><ListItem
               task={item.text}
               task={item.id}
               />
               ) 
               }
        </section>
            
       
        </div>

        );
        }
        }
        export default HomeScreen;



