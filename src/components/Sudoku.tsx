/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */
import * as React from 'react';

export interface ISudokuProps {
    name?: string;
    sudokuNumbers?: number[];
}
export interface ISudokuState {
    name: string;
    currentSudokuNumbers: number[];
}
export default class SudokuComponent extends React.Component<ISudokuProps, ISudokuState> {
  
    // private style: any = {
    //     fontSize: 14,
    //     fontStyle: 'bold',
    // }
    private static url: string = 'http://127.0.0.1:8080/sudoku/board';
    constructor(props: ISudokuProps) {
        super(props);
        this.state = {
            currentSudokuNumbers: [], 
            name: 'Sudoku Not loaded yet '
            };
        this.fetchSudoku();
    }
    public render() {
        return (
            <div className="sudoku-numbers">
                <h3>{ this.state.name }</h3>
                <h3>{ this.state.currentSudokuNumbers }</h3>
                <button onClick={this.handleClic}> Reload </button>
            </div>
        
        );
    }
    //Arrow function to bind this.xxx to class scope
    private handleClic = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.fetchSudoku(); 
    }
    private fetchSudoku = () => {
        fetch(SudokuComponent.url, {
                method: 'GET',
                headers:{
                'Content-Type': 'application/json',
                }
            })
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    currentSudokuNumbers: resJson.numbers,
                    name: resJson.name
                });
                console.log(resJson)
            })
            .catch((err)=>{
                console.log("Error in fetch indicated down: ")
                console.error(err);
            })
            
        };
    }
