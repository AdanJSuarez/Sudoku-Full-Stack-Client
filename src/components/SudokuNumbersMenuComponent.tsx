import * as React from 'react';

export interface SNMenuProps {
    numberX: number;
}

export interface SNMenuState {
    selectedNumber: number;
}

export default class AppComponent extends React.Component<SNMenuProps, SNMenuState> {
    constructor(props: SNMenuProps) {
        super(props);
        this.state = {
            selectedNumber: 0
        };
    }
    public render() {
        return (
            <div>
                <button className="Element-to-select" onClick={this.hundleClick}>1</button>
                <button className="Element-to-select" onClick={this.hundleClick}>2</button>
                <button className="Element-to-select" onClick={this.hundleClick}>3</button>
                <button className="Element-to-select" onClick={this.hundleClick}>4</button>
                <button className="Element-to-select" onClick={this.hundleClick}>5</button>
                <button className="Element-to-select" onClick={this.hundleClick}>6</button>
                <button className="Element-to-select" onClick={this.hundleClick}>7</button>
                <button className="Element-to-select" onClick={this.hundleClick}>8</button>
                <button className="Element-to-select" onClick={this.hundleClick}>9</button>
            </div>
        );
    }
    private hundleClick(e:React.MouseEvent<HTMLButtonElement>): void {

    }
}
