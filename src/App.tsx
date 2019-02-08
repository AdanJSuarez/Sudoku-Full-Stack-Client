/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

import * as React from 'react';
import './css/App.css';
import SudokuComponent from './components/SudokuComponent';
import GetSudoku from './services/GetSudoku';
import PostNumber from './services/PostNumber';
import zenImage from './zenForLoading.png';

interface ISudokuProps {
  sudokuNumbers: number[];
}

interface ISudokuState {
  currentSudokuNumbers: number[];
  loading: boolean;
  selectedNumber: any;
}

class App extends React.Component<ISudokuProps, ISudokuState> {
  
    private static URL: string = 'http://127.0.0.1:8080/sudoku/board';
    
    constructor (props: ISudokuProps){
        super(props);
        this.bindingThis();
        this.state = {
          currentSudokuNumbers: props.sudokuNumbers,
          loading: props.sudokuNumbers.length ? false:true,
          selectedNumber: 0,
        };
    };
    public render() {
        // Conditional render to allow zenImage shows up
        return (!this.state.loading) ? (
            <div className='App-div'>
            <div id='div-Header'>
                <h1 id="Title">BOARD GAME</h1>
            </div>
                <h2 className ='Name'>SUDOKU</h2> 
                <button id='Reload-button' onClick={ this.handleClick }> Reload </button> 
                <SudokuComponent sudokuNumbers={this.state.currentSudokuNumbers} toggledNumber={this.toggledNumber} />
            </div>
        ) : (
            <div className='App-div'>
            <div id='div-Header'>
                <h1 id="Title">BOARD GAME</h1>
            </div>
                <h2 className ='Name'>SUDOKU</h2> 
                <img id='Image-spinning' src = {zenImage} alt="Spinning image"/>
            </div>
        )
    }
    /**
     * Get sudoku numbers and updata state after component are mounted
     * @memberof App
     */
    public componentDidMount(){
        this.getSudoku();
    };
    /**
     * Reaload a new sudoku after click
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} e
     * @memberof App
     */
    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({loading:true});
        if (this.state.selectedNumber !== 0) {
            this.postNumber();
        }
        else {
            this.getSudoku();
        }
    }
    /**
     * Take the JSON object bubbled up
     * @private
     * @param {*} element
     * @memberof App
     */
    private toggledNumber(element: any):void {
        this.setState({selectedNumber:element});
    }
    /**
     * Fetch sudoku from the server and update state with its numbers
     * @private
     * @memberof App
     */
    private async getSudoku() {
        let sudoku = new GetSudoku(App.URL);
        let newStates = await sudoku.getSudoku();
        this.setState({
            currentSudokuNumbers: newStates.currentSudokuNumbers,
            loading: newStates.loading,
            selectedNumber: 0
        })
    }
    /**
     *POST the number selected to the server to generate a new sudoku 
         with selected number in the same position
     * @private
     * @memberof App
     */
    private async postNumber() {
        let postedNumber = new PostNumber(this.state, App.URL);
        let newStates = await postedNumber.getPostedNumber();
        this.setState({
            currentSudokuNumbers: newStates.currentSudokuNumbers,
            loading: newStates.loading,
            selectedNumber: 0
        })
    }
    /**
     * Bind methods to 'this'
     * @private
     * @memberof App
     */
    private bindingThis() {
        this.getSudoku = this.getSudoku.bind(this);
        this.bindingThis = this.bindingThis.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggledNumber = this.toggledNumber.bind(this);
        this.postNumber = this.postNumber.bind(this);
    }
}
export default App;
