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
            <div>
                <h3>{ this.state.name }</h3>
                <h3>{ this.state.currentSudokuNumbers }</h3>
            </div>
        
        );
    }
    private fetchSudoku() { // FIXME: fetch is not working because the server reject the request.
        fetch('http://127.0.0.1:8080/sudoku/board')  
            .then((res) => res.json())
            .then((resJson) => {
                this.state = {
                    currentSudokuNumbers: resJson.numbers,
                    name: resJson.name
                }
                console.log(resJson)
            })
            .catch((err)=>{
                console.log("Error in fetch indicated down: ")
                console.error(err);
            })
            
    };
    // private handleClick(){
    //     this.setState({currentSudokuNumbers: this.props.sudokuNumbers})
    // }
}
