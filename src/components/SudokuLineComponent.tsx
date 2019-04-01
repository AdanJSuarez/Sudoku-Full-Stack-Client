/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

import * as React from 'react';
import SudokuElementComponent from './SudokuElementComponent';

export interface ISudokuLineProps {
    row: number;
    dataLine: number[];
    toggledNumber: any;
}

export interface ISudokuLineState {
    currentRow  : number;
    currentToggleNumbers: any[];
    currentDataElement1: number | string;
    currentDataElement2: number | string;
    currentDataElement3: number | string;
    currentDataElement4: number | string;
    currentDataElement5: number | string;
    currentDataElement6: number | string;
    currentDataElement7: number | string;
    currentDataElement8: number | string;
    currentDataElement9: number | string;
}

export default class SudokuLineComponent extends React.Component<ISudokuLineProps, ISudokuLineState> {
    constructor(props: ISudokuLineProps) {
        super(props);
        this.state = {
            currentRow: props.row,
            currentToggleNumbers: [],
            currentDataElement1: props.dataLine[0],
            currentDataElement2: props.dataLine[1],
            currentDataElement3: props.dataLine[2],
            currentDataElement4: props.dataLine[3],
            currentDataElement5: props.dataLine[4],
            currentDataElement6: props.dataLine[5],
            currentDataElement7: props.dataLine[6],
            currentDataElement8: props.dataLine[7],
            currentDataElement9: props.dataLine[8],
        };
        this.toggleNumber = this.toggleNumber.bind(this);
    }

    public render() {
        return (
            <div className = 'Table-Line'>
                <table className='Table'>
                <tbody>
                    <tr>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={1} dataElement={
                            this.state.currentDataElement1
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={2} dataElement={
                            this.state.currentDataElement2
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={3} dataElement={
                            this.state.currentDataElement3
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td></td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={4} dataElement={
                            this.state.currentDataElement4
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={5} dataElement={
                            this.state.currentDataElement5
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={6} dataElement={
                            this.state.currentDataElement6
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td></td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={7} dataElement={
                            this.state.currentDataElement7
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={8} dataElement={
                            this.state.currentDataElement8
                            } toggleNumber={this.toggleNumber}/> } </td>
                        <td className= 'td'> { <SudokuElementComponent row={this.props.row} column={9} dataElement={
                            this.state.currentDataElement9
                            } toggleNumber={this.toggleNumber}/> } </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
    /**
     * Action before initial render. Hide numbers.
     *
     * @memberof SudokuLineComponent
     */
    public componentWillMount() {
        let hidenElements: number[] = this.selectHideElements();
            for (let i of hidenElements) {
                const element: string = "currentDataElement" + i.toString();
                this.state[element] = " ";
            }
    }
    /**
     *Take the Json object bubbled up
     * @param {*} element
     * @memberof SudokuLineComponent
     */
    public toggleNumber(element: any) {
      this.props.toggledNumber(element);
    }
    /**
     * Return a list of column to be hide.
     *
     * @private
     * @param {number} [max=4]
     * @returns {number[]}
     * @memberof SudokuLineComponent
     */
    private selectHideElements(max: number = 4): number[] {
        let result: number[] = [];
        for (let i = 0; i < max; i++) {
            let num: number = Math.floor(Math.random() * 9) + 1;
            result.push(num);
        }
        return result;
    }
}
