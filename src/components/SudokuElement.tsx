import * as React from 'react';

export interface SudokuElementProps {
    lineNumber: Number;
    dataElement: Number;
}

export interface SudokuElementState {
    currentLineNumber: Number;
    currentDataElement: Number;
}

export default class SudokuElementComponent extends React.Component<SudokuElementProps, SudokuElementState> {
    constructor(props: SudokuElementProps) {
        super(props);
        this.state = {
            currentLineNumber: props.lineNumber,
            currentDataElement: props.dataElement
        };
        this.hundleMouseOver = this.hundleMouseOver.bind(this);
        this.hundleClick = this.hundleClick.bind(this);
    }

    public render() {
        return (
            <h3 className='Element' onMouseOver={this.hundleMouseOver} onClick={this.hundleClick}> { this.state.currentDataElement } </h3>
        );
    }
    private hundleMouseOver(){
        null;
    }
    private hundleClick(){
        
        null;
    }
}
