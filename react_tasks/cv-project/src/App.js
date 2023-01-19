import React, { Component } from 'react';
import uniqid from 'uniqid';
import './Styles/styles.css';
import './Styles/forms.css';
import General from './Components/General';
import Education from './Components/Education';
import Experience from './Components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationIds: [],
      experienceIds: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleClick(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }
  handleDelete(type, id) {
    this.setState((prevState) => {
      let newList = prevState[type].filter((key) => key !== id);
      return {
        [type]: newList,
      };
    });
  }
  render() {
    const eduComponents = this.state.educationIds.map((id) => (
      <Education key={id} id={id} handleDelete={this.handleDelete} />
    ));
    const expComponents = this.state.experienceIds.map((id) => (
      <Experience key={id} id={id} handleDelete={this.handleDelete} />
    ));
    return (
      <div>
        <header>
          <h1 className='title'>CV-App with React</h1>
        </header>
        <main>
          <h2 className='subTitle'>General Information</h2>
          <General />
          <div>
            <h2 className='subTitle'>Educational Experience</h2>
            {eduComponents}
            <button
              className='addBtn'
              onClick={() => this.handleClick('educationIds')}
            >
              Add
            </button>
          </div>
          <div>
            <h2 className='subTitle'>Experience Section</h2>
            {expComponents}
            <button
              className='addBtn'
              onClick={() => this.handleClick('experienceIds')}
            >
              Add
            </button>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
