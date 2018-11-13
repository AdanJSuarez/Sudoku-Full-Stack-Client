/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

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
    toggleOn: boolean;
}
export default class SudokuElementComponent extends React.Component<SudokuElementProps, SudokuElementState> {
    constructor(props: SudokuElementProps) {
        super(props);
        this.state = {
            currentRow: props.row,
            currentColumn: props.column,
            currentDataElement: props.dataElement,
            toggleOn: false
        };
        this.hundleClick = this.hundleClick.bind(this);
    }
    public render() {
        return (
            <button className={'Element'} onClick={this.hundleClick}> { this.state.currentDataElement } </button>
        );
    }
    /**
     * Handle click bubbling up Json object selected with click
     * @private
     * @param {React.MouseEvent<HTMLButtonElement>} e
     * @memberof SudokuElementComponent
     */
    private hundleClick(e: React.MouseEvent<HTMLButtonElement>){
        let emptyElement = {};
        let elementBubbleUp: any;
        let element = {
            number: this.state.currentDataElement,
            row: this.state.currentRow,
            column: this.state.currentColumn
        }
        this.state.toggleOn? this.setState({ toggleOn: false }) : this.setState({ toggleOn: true })
        this.state.toggleOn? elementBubbleUp = emptyElement:elementBubbleUp = element;
        this.props.toggleNumber(elementBubbleUp);
    }
}
