import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import SudokuComponent from '../components/SudokuComponent';

//Set the default serializer for jest to be from enzyme-to-json
//this produce a more easy to read serialized format
expect.addSnapshotSerializer(createSerializer({mode: "deep"}));
Enzyme.configure({adapter: new Adapter()});

describe("Test suit for SudokuComponent", ()=>{
    const sudokuSolved = [2,5,8,7,4,3,9,6,1,6,7,1,5,9,8,2,3,4,3,4,9,2,1,6,8,7,5,5,6,
        3,9,7,1,4,8,2,1,8,2,3,5,4,7,9,6,7,9,4,8,6,2,1,5,3,4,1,7,6,8,5,3,2,9,9,3,6,
        1,2,7,5,4,8,8,2,5,4,3,9,6,1,7];
    
    it('render correctly shallow', ()=>{
        const wrapper = shallow(
            <SudokuComponent sudokuNumbers={sudokuSolved} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly render', ()=>{
        const wrapper = render(
            <SudokuComponent sudokuNumbers={sudokuSolved} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly mount', () => {
        const wrapper = mount(<SudokuComponent sudokuNumbers={sudokuSolved}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('Test number of lines', ()=>{
        const wrapper = shallow(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={()=>{}}/>);
        expect(wrapper.find('SudokuLineComponent')).toHaveLength(9);
    });
    it('Test number of Elements',()=>{
        const wrapper = mount(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={()=>{}}/>);
        expect(wrapper.find('SudokuElementComponent')).toHaveLength(81);
    })

})