/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

import * as React from 'react';
import './css/App.css';
import SudokuComponent from './components/Sudoku';
import zenImage from './zenForLoading.png';


interface ISudokuProps {
  sudokuNumbers?: number[];
}

interface ISudokuState {
  currentSudokuNumbers: number[];
  loading: boolean;
}

class App extends React.Component<ISudokuProps, ISudokuState> {
  
    private static url: string = 'http://127.0.0.1:8080/sudoku/board';

    private selectedNumber: any;
    
    constructor (props: ISudokuProps){
        super(props);
        this.state = {
          currentSudokuNumbers: [],
          loading: true
        }
        this.selectedNumber = 0;
        this.getSudoku();
        // Binding "this"
        this.getSudoku = this.getSudoku.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggledNumber = this.toggledNumber.bind(this);
        this.postNumber = this.postNumber.bind(this);
    }
    public render() {
        // Conditional render to allow zenImage shows up
        return (!this.state.loading) ? (
            <div className='App-div'>
                <h2 className ='Name'>SUDOKU</h2> 
                <button className='Reload-button' onClick={ this.handleClick }> Reload </button> 
                <SudokuComponent sudokuNumbers={this.state.currentSudokuNumbers} toggledNumber={this.toggledNumber} />
            </div>
        ) : (
            <div className='App-div'>
                <h2 className ='Name'>SUDOKU</h2> 
                <img src = {zenImage} className='Image-spinning' alt="Spinning image"/>
            </div>
        )
    }
    /**
     * Reaload a new sudoku after click
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} e
     * @memberof App
     */
    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({loading:true});
        if (this.selectedNumber !== 0) {
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
        this.selectedNumber = element;
    }
    /**
     * Fetch sudoku from the server and update state with its numbers
     * @private
     * @memberof App
     */
    private getSudoku():void {
        fetch(App.url, {
                method: 'GET',
        })
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                currentSudokuNumbers: resJson.numbers,
                loading: false,
            });
            console.log(resJson)
        })
        .catch((err)=>{
            console.log("Error in fetch indicated down: ")
            console.error(err);
        })
    }
    /**
     *POST the number selected to the server to generate a new sudoku 
         with selected number in the same position
     * @private
     * @memberof App
     */
    private postNumber():void {
        console.log('The selected number is:',this.selectedNumber)
        fetch(App.url, {
            method: 'POST',
            body: JSON.stringify(this.selectedNumber),
        })
        .then((res) => res.json())
        .then((resJson) => {
            console.log("POST response: ", resJson)
            this.setState({
                currentSudokuNumbers:resJson.numbers,
                loading: false
            })
        })
        .catch(res => (console.log('Error POST: ', res)))
    }
}
export default App;
