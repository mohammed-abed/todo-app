import { Component} from 'react';
import"./Styles.css";
import {Button} from './Components/Button/Button';
import {data} from '../../data';

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
             </section>
            <Button 
             text="Add"
             handelClick={()=>{}}
                />
            <section className="item-section" >
               {data.map(item=><ListImtem
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



