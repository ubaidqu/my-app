import React,{useState} from 'react'
// import  proptypes from 'prop-types'


export default function Textform(props) {
  const [count,setCount]=useState(0);
  // const[count2, setCount2]=useState(0);
  let countChar=0;
  // let countCon=0;
  const handleUPclick =() =>{
    console.log("Upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success");
  }
  const handleONchange=(event)=>{
    console.log("Onchange");
    setText(event.target.value);
  }
  const handlelowclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  }
  const clear=()=>{
    let newText=('');
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  
const Vowels = () => {
  for (let count = 0; count < text.length; count++) {
    if (text.charAt(count).match(/[aeiouAEIOU]/)) {
      countChar++;
    }
    setCount (countChar);
    props.showAlert("Vowels Counted","success");
  

  }
}
// const Consonents = () => {
//   for (let count = 0; count <=text.length; count++) {
//     if (text.charAt(count2).match((/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) ){
//       countCon++;
//     }
//     setCount2(countCon);
//     }
//   }

const [text,setText]=useState('Enter text here');
return (
<>
<div className="container"style={{color:props.mode==='dark'?'white':'black'}}> 
  <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value={text}  onChange={handleONchange}style={{backgroundColor:props.mode==='dark'?'	#202020':'white',color:props.mode==='dark'?'white':'black'}}id="myBox"  rows="8" ></textarea>
</div>
<button  className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handlelowclick} >Convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={clear}>Clear all</button>
<button className="btn btn-primary mx-1" onClick={Vowels}>Count Vowels</button>
{/* <button type="button" class="btn btn-primary">Primary</button> */}
{/* <button className="btn btn primary" onClick={Consonents}>Count Consonents</button> */}



</div>
<div className="container "style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Text Summary </h2>
   {/* <p>{text.split("")}words</p> */}
  <p>{(text.split(" ").length)-1}words and {text.length}charcters</p>
  <p>{0.008 * text.split(" ").length} time required  </p>
  <p>Number of Vowels are {count}</p>
  {/* <p>Number of consonents are {count2}</p> */}
  <h3>Preview</h3>
  <p>{text}</p>
</div>

</>
)


}