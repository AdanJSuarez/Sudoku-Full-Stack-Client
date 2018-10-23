import * as React from 'react';
import SudokuElementComponent from './SudokuElement';

export interface ISudokuLineProps {
    lineNumber: number;
    dataLine: number[];
    toggledNumber: any;
}

export interface ISudokuLineState {
    currentLineNumber  : number;
    currentDataElement1: number;
    currentDataElement2: number;
    currentDataElement3: number;
    currentDataElement4: number;
    currentDataElement5: number;
    currentDataElement6: number;
    currentDataElement7: number;
    currentDataElement8: number;
    currentDataElement9: number;
}

export default class SudokuLineComponent extends React.Component<ISudokuLineProps, ISudokuLineState> {
    constructor(props: ISudokuLineProps) {
        super(props);
        this.state = {
            currentLineNumber: props.lineNumber,
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
    }

    public render() {
        return (
            <div className = 'Line'>
                <table className='Table'>
                    <tr>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement1} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement2} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement3} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement4} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement5} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement6} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement7} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement8} /> } </td>
                        <td className= 'td'> { <SudokuElementComponent lineNumber={this.props.lineNumber} dataElement={this.state.currentDataElement9} /> } </td>
                    </tr>
                </table>
            </div>
        );
    }
    public addElementToFixNumbers(element: SudokuElementComponent) {

    }
}
