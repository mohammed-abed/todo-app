import React, { useState,useEffect} from 'react';
import"./Styles.css";
import Button from '../../Components/Button/Button';
import {data} from '../../data';
import ListItem from'../../Components/ListItem/ListItem'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function HomeScreen () {
   /* const [state,setState]= useState({

        value:'',
        // list:data,
        list:[]

    });*/

    const [error,setError]= useState('');
    const [list,setList]= useState([]);
    const [value,setValue]= useState('');


    /* state = {
         value:'',
      // list:data,
       list:[]
     };*/

    const fetchData = async ()=>{
        try {

            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

            //console.log(response);

            setList(

                response.data.splice(0, 30),
            );
        }catch(e) {
            console.log(e);
        }
        };

    useEffect(()=> {
        fetchData();
        },[]);


    /*async componentDidMount(){
     try
     {
         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
         console.log(response);

         this.setState({
        list: response.data.splice(0,30),
     });

     }catch(e){
       console.log(e);
    }
*/

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

        return(
     <div className="inner-container">
           <h1 className="page-title">To do List</h1>

        <section className="input-section">
            <div className="input-box">
            <input
            className="add-task"
            type="text"
            placeholder="enter task"
            onChange={(event)=>{
                setValue(

                    event.target.value

                );
            }}
            value={value}

            />
                {error ? <span>{error}</span>: null}
        </div>
            <Button className="btn"
                    text="Add"
                    handelClick={()=> {
                        if(value) {
                            const newArr = [
                                {
                                    title: value,
                                    id: uuidv4()
                                },
                                ...list

                            ];


                            setError('')
                            setValue('')
                            setList(newArr)


                        } else {
                            setError(
                                 "please sumbit"
                            );

                        }
                    }}

            />

        </section>


        <section className="item-section" >
               { list.length ? (
                list.map((item) =>
                   (<ListItem
                   task={item.title}//text
                   key={item.id}
               handelDelete={() => {
                   const filterdItem = list.filter(
                       (filterItem) => filterItem.id != item.id
                   );
                   setList(
                       filterdItem
                   );
               }}
               />
                   ))
               ):(<span>loding...</span>
               ) }
        </section>
            

     </div>

        );

        }
        export default HomeScreen;



