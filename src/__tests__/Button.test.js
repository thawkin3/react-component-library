import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from '../Button';

let props;
let wrapper;

describe('<Button /> component', () => {
    beforeEach(() => {
        props = {
            children: 'Click me for more info',
            classNames: 'btn',
            clickHandler: () => { /* do nothing */ },
        };
        wrapper = shallow(<Button {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders a button', () => {
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('renders a button with additional classes if they are provided', () => {
        props.classNames = undefined;
        wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('button').prop('className')).toEqual('');

        props.classNames = 'extraClass1 extraClass2';
        wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('button').prop('className')).toEqual('extraClass1 extraClass2');
    });

    it('calls the clickHandler function when the button is clicked', () => {
        const spy = jest.spyOn(props, 'clickHandler');
        wrapper = shallow(<Button {...props} />);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
