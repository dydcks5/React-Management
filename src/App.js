import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'이용재',
  'birthday':'920521',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'유니끄로',
  'birthday':'960905',
  'gender':'여자',
  'job':'대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '어스',
  'birthday':'930911',
  'gender':'남자',
  'job':'대학생'
}]

class App extends Component {
  render() {
    return (
      <div>{
          customer.map(c => {
            return (
              <Customer 
              key ={c.id}
              id={c.id}
              image={c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
