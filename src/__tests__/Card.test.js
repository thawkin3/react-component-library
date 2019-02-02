import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Card from '../Card';

let props;
let wrapper;

describe('<Card /> component', () => {
    beforeEach(() => {
        props = {
            children: <div><p>Child paragraph 1</p><p>Child paragraph 2</p></div>,
            childrenClasses: undefined,
            childrenStyles: undefined,
            headerClasses: undefined,
            headerStyles: undefined,
            headerText: 'This is the header',
        };
        wrapper = shallow(<Card {...props} />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card {...props} />, div);
    });

    it('matches the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders an h1 tag', () => {
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('renders a div with the class "react-component-library__card"', () => {
        expect(wrapper.find('div.react-component-library__card').length).toEqual(1);
    });
});
