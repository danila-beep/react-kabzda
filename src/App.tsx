import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

//function declaration
function App() {
  console.log('App rendering')
  return (
      <div>
        <PageTitle title = {"This is App Component"}/>
        <PageTitle title = {"My friend"}/>
        Article 1
        <Rating value = {3}/>
        <Accordion titleValue = {"Menu"} />
        <Accordion titleValue = {"Users"} />
        Article 2
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
      </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('Rating rendering')
  return <h1>{ props.title }</h1>
}

export default App;
