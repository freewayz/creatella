import React from 'react';
import { shallow } from 'enzyme';
import Products from '../src/components/products';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const ProductsComponent = shallow(<Products/>);

test('ProductsComponent rendered correctly with empty products', () => {
    expect(
        ProductsComponent.state().products
    ).toEqual([])
});






