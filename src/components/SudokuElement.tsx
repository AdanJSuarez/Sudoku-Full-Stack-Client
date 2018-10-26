import * as React from 'react';

export interface SudokuElementProps {
    row: number;
    column: number
    dataElement: number;
    toggleNumber: any;
}

export interface SudokuElementState {
    currentRow: number;
    currentColumn: number;
    currentDataElement: number;
}

export default class SudokuElementComponent extends React.Component<SudokuElementProps, SudokuElementState> {
    constructor(props: SudokuElementProps) {
        super(props);
        this.state = {
            currentRow: props.row,
            currentColumn: props.column,
            currentDataElement: props.dataElement,
        };
        this.hundleMouseOver = this.hundleMouseOver.bind(this);
        this.hundleClick = this.hundleClick.bind(this);
    }

    public render() {
        return (
            <button className={'Element' } onMouseOver={this.hundleMouseOver} onClick={this.hundleClick}> { this.state.currentDataElement } </button>
        );
    }
    private hundleMouseOver(){
        //TODO: Change color when mouse hover it.
        null;
    }
    private hundleClick(e: React.MouseEvent<HTMLButtonElement>){
        // TODO: get Element number and add to toggled number list
        let element = {
            number: this.state.currentDataElement,
            row: this.state.currentRow,
            column: this.state.currentColumn
        }
        this.props.toggleNumber(element);
    }
}
