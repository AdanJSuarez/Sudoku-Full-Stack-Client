import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import SudokuElementComponent from '../components/SudokuElementComponent';

//Set the default serializer for jest to be from enzyme-to-json
//this produce a more easy to read serialized format
expect.addSnapshotSerializer(createSerializer({mode: "deep"}));
Enzyme.configure({adapter: new Adapter()});

describe("Test suit for SudokuElementComponent", ()=>{
    
    it('render correctly shallow', ()=>{
        const wrapper = shallow(
            <SudokuElementComponent row={1} row={1} column={1} dataElement={2} toggledNumber={{number:2, row:1, column:1}} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render correctly render', ()=>{
        const wrapper = render(
            <SudokuElementComponent row={1} row={1} column={1} dataElement={2} toggledNumber={{number:2, row:1, column:1}} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('Test states', ()=>{
        const wrapper = shallow(<SudokuElementComponent  row={1} column={1} dataElement={2} toggledNumber={()=>{}} />);
        const state = wrapper.instance().state;
        expect(state.toggleOn).toBe(false);
        // wrapper.simulate('click');
        // expect(state.toggleOn).toBe(true);
    })
})