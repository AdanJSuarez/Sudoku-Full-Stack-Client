import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import sinon from 'sinon';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import SudokuElementComponent from '../components/SudokuElementComponent';
//import { expect } from 'chai';
// import SudokuComponent from '../components/Sudoku';

//Set the default serializer for jest to be from enzyme-to-json
//this produce a more easy to read serialized format
expect.addSnapshotSerializer(createSerializer({mode: "deep"}));
Enzyme.configure({adapter: new Adapter()});

// Mocks server calls ;)
jest.mock('../services/GetSudoku.ts');
jest.mock('../services/PostNumber.ts');

describe("Test suit for App", ()=>{
    const sudokuSolved = [2,5,8,7,4,3,9,6,1,6,7,1,5,9,8,2,3,4,3,4,9,2,1,6,8,7,5,5,6,
        3,9,7,1,4,8,2,1,8,2,3,5,4,7,9,6,7,9,4,8,6,2,1,5,3,4,1,7,6,8,5,3,2,9,9,3,6,
        1,2,7,5,4,8,8,2,5,4,3,9,6,1,7];
    
    it('render correctly shallow without numbers', ()=>{
        const wrapper = shallow(
            <App sudokuNumbers={[]} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly shallow with numbers', ()=>{
        const wrapper = shallow(
            <App sudokuNumbers={sudokuSolved} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly render without numbers', ()=>{
        const wrapper = render(
            <App sudokuNumbers={[]} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly render with numbers', () => {
        const wrapper = render(
            <App sudokuNumbers={sudokuSolved} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly mount without numbers', () => {
        const wrapper = mount(<App sudokuNumbers={[]}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render correctly mount with numbers', () => {
        const wrapper = mount(<App sudokuNumbers={sudokuSolved}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Test App has a image when it has no sudoku numbers', () => {
        const wrapper = shallow(<App sudokuNumbers={[]} />);
        expect(wrapper.find('img').hasClass('Image-spinning')).toBe(true);
    });
    it('Test load number after first render', () => {
        const wrapper = shallow(<App sudokuNumbers={[]} />);
        expect(wrapper.find('img').hasClass('Image-spinning')).toBe(true);
        wrapper.update();
        expect(wrapper.find('img').hasClass('Image-spinning')).toBe(false);
    })
    it('Test App has no image when it has no sudoku numbers and has a button', ()=>{
        const wrapper = shallow(<App sudokuNumbers={sudokuSolved}/>);
        expect(wrapper.hasClass('Reload-button')).toBe(false);
        expect(wrapper.find('button').first().hasClass('Reload-button')).toBe(true); 
    });
    it('Test click on a reload with sudoku numbers', () => {
        const wrapper = shallow(<App sudokuNumbers={sudokuSolved} />); //
        expect(wrapper.find('button').hasClass('Reload-button')).toBe(true);
        expect(wrapper.state('loading')).toBe(false);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('loading')).toBe(true);
    });
})