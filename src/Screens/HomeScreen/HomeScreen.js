import React, { Component} from 'react';
import"./Styles.css";
import Button from '../../Components/Button/Button';
import {data} from '../../data';
import ListItem from'../../Components/ListItem/ListItem'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class HomeScreen extends Component {
      state = {
          value:'',
        list:data,
         // list:[]
      };
   async componentsDidMount(){
     try
     {
         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

     this.setState({
        list: response.data,
     });
   }catch(e){
       console.log(e);
    }
}
     /* componentsDidMount(){
         const fetchData = async ()=>{
              const response=await axios.get("www.google.com")
          };

          this.setState({
              // eslint-disable-next-line no-undef
              list: response.data,

          });
          fetchData();
      }*/
    render(){
        return(
     <div className="inner-container">
           <h1 className="page-title">To do List</h1>

        <div className="input-section">
            <div className="input-box">
            <input
            className="add-task"
            type="text"
            placeholder="enter task"
            onChange={(event)=>{
                this.setState({
                    value:event.target.value

                })
            }}
            value={this.state.value}

            />
                {this.state.error ? <span>{this.state.error}</span>: null}
        </div>
            <Button className="btn"
                    text="Add"
                    handelClick={()=> {
                        if(this.state.value) {
                            const newArr = [
                                {
                                    text: this.state.value,
                                    id: uuidv4()
                                },
                                ...this.state.list

                            ];
                            this.setState({

                                list: newArr,
                                value: " ",
                                error: ''
                            });
                        } else {
                            this.setState({
                                error: "please sumbit"
                            });

                        }
                    }}

            />



        <section className="item-section" >
               { this.state.list.length ? (
                this.state.list.map((item) =>
                   (<ListItem
                   task={item.text}//text
                   key={item.id}
               handelDelete={() => {
                   const filterdItem = this.state.list.filter(
                       (filterItem) => filterItem.id != item.id
                   );
                   this.setState({
                       list:filterdItem
                   });
               }}
               />
                   ))
               ):(<span>loding...</span>
               ) }
        </section>
            
       
        </div>
     </div>

        );
        }
        }
        export default HomeScreen;



