import * as React from 'react';
import './css/App.css';
import SudokuComponent from './components/Sudoku';
import zenImage from './zenForLoading.png';


interface ISudokuProps {
  sudokuNumbers?: number[];
}

interface ISudokuState {
  currentSudokuNumbers: number[];
}

class App extends React.Component<ISudokuProps, ISudokuState> {
  
    private static url: string = 'http://127.0.0.1:8080/sudoku/board';

    private selectedNumber: any;
    
    constructor (props: ISudokuProps){
        super(props);
        this.state = {
          currentSudokuNumbers: []
        }
        this.selectedNumber = 0;
        this.getSudoku();
        this.getSudoku = this.getSudoku.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetStateNumbers = this.resetStateNumbers.bind(this);
        this.toggledNumber = this.toggledNumber.bind(this);
        this.postNumber = this.postNumber.bind(this);
    }
    public render() {
        // Conditional render to allow zenImage shows up
        return this.state.currentSudokuNumbers.length ? (
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
        // Delete sudoku numbers to let zenImage shows up
        this.resetStateNumbers();
        if (this.selectedNumber !== 0) {
            console.log("Posting the server", this.selectedNumber);
            this.postNumber();
        }
        else {
            this.getSudoku();
        }
        // TODO: Perhaps I have to reset this.selectedNumber
         
    }
    private toggledNumber(element: any){
        this.selectedNumber = element;
        console.log(element); // TODO: Delete this after checking
    }
    private resetStateNumbers(){
      this.setState({ currentSudokuNumbers:[]});
    }
    private getSudoku(){
        fetch(App.url, {
                method: 'GET',
                // mode: 'no-cors',
                // headers:{
                // 'Content-Type': 'application/json',
                // }
        })
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                currentSudokuNumbers: resJson.numbers,
                //name: resJson.name
            });
            console.log(resJson)
        })
        .catch((err)=>{
            console.log("Error in fetch indicated down: ")
            console.error(err);
        })
    }
    private postNumber(){
        // TODO: Post number into server and return a new sudoku
        console.log('The selected number is:',this.selectedNumber)
        fetch(App.url, {
            method: 'POST',
            // headers:{
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.selectedNumber),
        })
        .then((res) => res.json())
        .then((responseData) => console.log("POST response: ", responseData))
        .catch(res => (console.log('Error POST: ', res)))
    }
}
export default App;
