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
    
        let spy;
    
    beforeEach(()=>{
        spy = sinon.spy();
    })
    
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
    it('Test click once the first Element and return the right object', ()=>{
        const wrapper = mount(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={spy}/>);
        wrapper.find('button').first().simulate('click');
        expect(spy.calledOnce).toBe(true);
        expect(spy.calledTwice).toBe(false);
        expect(spy.calledOnceWithExactly({row:1, column:1, number:2})).toBe(true);
    });
    it('Test click once the second Element and return the right object', ()=>{
        const wrapper = mount(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={spy}/>);
        wrapper.find('button').at(1).simulate('click');
        expect(spy.calledOnce).toBe(true);
        expect(spy.calledTwice).toBe(false);
        expect(spy.calledOnceWithExactly({row:1, column:2, number:5})).toBe(true);
    });
    it('Test number of lines', ()=>{
        const wrapper = shallow(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={()=>{}}/>);
        expect(wrapper.find('SudokuLineComponent')).toHaveLength(9)
    });
    it('Test toggle on/off, on at first click off at second and on at third', ()=>{
        const wrapper = mount(<SudokuComponent sudokuNumbers={sudokuSolved} toggledNumber={spy}/>);
        let state = wrapper.find('SudokuElementComponent').at(1).instance().state;
        expect(state.toggleOn).toBe(false);
        //First click
        wrapper.find('button').at(1).simulate('click');
        expect(spy.calledWith({row:1, column:2, number:5})).toBe(true);
        wrapper.update();
        state = wrapper.find('SudokuElementComponent').at(1).instance().state;
        expect(state.toggleOn).toBe(true);
        //Second click
        wrapper.find('button').at(1).simulate('click');
        expect(spy.calledTwice).toBe(true);
        wrapper.update();
        state = wrapper.find('SudokuElementComponent').at(1).instance().state;
        expect(state.toggleOn).toBe(false);
        expect(spy.calledWith({})).toBe(true);
        //Third click
        wrapper.find('button').at(1).simulate('click');
        expect(spy.calledThrice).toBe(true);
        wrapper.update();
        state = wrapper.find('SudokuElementComponent').at(1).instance().state;
        expect(spy.alwaysCalledWith({row:1, column:2, number:5})).toBe(false);        
    })
})