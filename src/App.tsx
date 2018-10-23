import * as React from 'react';
import './App.css';
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
    
    constructor (props: ISudokuProps){
        super(props);
        this.state = {
          currentSudokuNumbers: []
        }
        this.getSudoku();
        this.getSudoku = this.getSudoku.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    public render() {
        // Conditional render to allow zenImage shows up
        return this.state.currentSudokuNumbers.length ? (
            <div className='App-div'>
                <h2 className ='Name'>SUDOKU</h2> 
                <SudokuComponent sudokuNumbers={this.state.currentSudokuNumbers} toggledNumbers={this.toggledNumbers} />
                <button className='reload-button' onClick={ this.handleClick }> Reload </button> 
            </div>
        ) : (
          <div className='App-div'>
              <h2 className ='Name'>SUDOKU</h2> 
              <img src = {zenImage} className='Image-spinning' alt="Spinning image"/>
          </div>
          )
    }
    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        // Delete sudoku numbers to let zenImage shows up
        this.setState({ currentSudokuNumbers:[]})
        this.getSudoku(); 
    }
    private toggledNumbers(numbers: any){ // TODO: Finish this method
        fetch(App.url, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          }
        })
    }
    private getSudoku(){
      fetch(App.url, {
              method: 'GET',
              headers:{
              'Content-Type': 'application/json',
              }
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
}
    
export default App;
