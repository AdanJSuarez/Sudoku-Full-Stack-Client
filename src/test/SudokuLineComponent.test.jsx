import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
// import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
//import { expect } from 'chai';
import SudokuLineComponent from '../components/SudokuLine';

//Set the default serializer for jest to be from enzyme-to-json
//this produce a more easy to read serialized format
expect.addSnapshotSerializer(createSerializer({mode: "deep"}));
Enzyme.configure({adapter: new Adapter()});

describe("Test suit for SudokuLineComponent", ()=>{
    const dataLine = [2,5,8,7,4,3,9,6,1];
    
    it('render correctly shallow', ()=>{
        const wrapper = shallow(
            <SudokuLineComponent row={1} dataLine={dataLine} toggledNumber={{number:2, row:1, column:1}} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly render', ()=>{
        const wrapper = render(
            <SudokuLineComponent row={1} dataLine={dataLine} toggledNumber={{number:2, row:1, column:1}} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly mount', () => {
        const wrapper = mount(<SudokuLineComponent row={1} dataLine={dataLine} toggledNumber={{number:2, row:1, column:1}}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    //TODO: It needs many more test!!
})