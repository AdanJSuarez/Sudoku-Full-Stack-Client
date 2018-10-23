/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */
import * as React from 'react';
import SudokuLineComponent from './SudokuLine';

export interface ISudokuProps {
    sudokuNumbers: number[];
    toggledNumbers: any;
}
export interface ISudokuState {
    dataLine1: number[],
    dataLine2: number[],
    dataLine3: number[],
    dataLine4: number[],
    dataLine5: number[],
    dataLine6: number[],
    dataLine7: number[],
    dataLine8: number[],
    dataLine9: number[]
}
export default class SudokuComponent extends React.Component<ISudokuProps, ISudokuState> {
      
    constructor(props: ISudokuProps) {
        super(props);
        this.state = {
            dataLine1:this.getRow(1),
            dataLine2:this.getRow(2),
            dataLine3:this.getRow(3),
            dataLine4:this.getRow(4),
            dataLine5:this.getRow(5),
            dataLine6:this.getRow(6),
            dataLine7:this.getRow(7),
            dataLine8:this.getRow(8),
            dataLine9:this.getRow(9), 
            };
        this.getRow = this.getRow.bind(this);
    }
    public render() {

        return  (
            <div className="sudoku-numbers">
                <p>{ <SudokuLineComponent lineNumber={1} dataLine={this.state.dataLine1} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={2} dataLine={this.state.dataLine2} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={3} dataLine={this.state.dataLine3} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={4} dataLine={this.state.dataLine4} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={5} dataLine={this.state.dataLine5} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={6} dataLine={this.state.dataLine6} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={7} dataLine={this.state.dataLine7} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={8} dataLine={this.state.dataLine8} toggledNumber={1}/> }</p>
                <p>{ <SudokuLineComponent lineNumber={9} dataLine={this.state.dataLine9} toggledNumber={1}/> }</p>
            </div>
            )
    }
    private getRow(num:number): number[]{
        let begin = (num - 1) * 9;
        let end = begin + 9;
        let result = this.props.sudokuNumbers.slice(begin, end);
        return result;
    }
}
