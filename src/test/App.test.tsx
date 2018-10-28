import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App';

describe("Test suit for App", () => {
    
    let AppInstance:any;
    
    beforeAll(() => {
       AppInstance == new App({sudokuNumbers:[]}); 
    });
    // afterAll(()=>{
    //     server.restore();
    // });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should get a sudoku from the server', () => {
        setTimeout(()=>{
            let actual3: number = AppInstance.state.currentSudokuNumbers.length;
            let expected3 = 81;
            let actual4: boolean = AppInstance.state.loading;
            let expected4: boolean = false; 
            expect(actual3).toBe(expected3);
            expect(actual4).toBe(expected4);
        }, 1);
    })
})

