import React , { useState } from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require("@rstacruz/startup-name-generator");

// using state hooks in functional componenet
const App = ()=> {
    const [headerText,  setHeaderText] = useState('Name It!');
    const [headerExpanded , setHeaderExpanded] = useState(true);
    const [suggestedNames , setSuggestedNames] = useState([]);

    const handleInputchange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
     };

    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputchange} />
            <ResultsContainer suggestedNames={suggestedNames}/>
        </div>
    );

}

// *class based component
// class App extends React.Component {
//     constructor(){
//     super()

//     this.state = {
//         headerText: 'Name It!',
//         headerExpanded: true,
//         suggestedNames: [] , 
//     };
// }


//     handleInputchange = (inputText) => {
//         this.setState({ headerExpanded: !inputText ,
//         suggestedNames: inputText ? name(inputText) : [] ,
//      });
//     };

//     render() {
//         return (
//             <div>
//                 {/* State */}
//                 {/* <h3>{this.state.headertext}</h3>
//                 <button
//                     onClick={() => {
//                         this.setState({
//                             headertext: 'Woooh , its the new headertext',
//                         });
//                     }}
//                 >
//                     Magic Happens Here !
//                 </button> */}

//                 {/* Props */}
//                 <Header
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText}
//                 />
//                 <SearchBox onInputChange={this.handleInputchange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames}/>
//             </div>
//         );
//     }
// }

// *function based componentte
// function App() {
// return <h1> This is my functional componenet </h1>;
// }

export default App;
