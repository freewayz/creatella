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

test('ProductsComponent rendered total number of products', () => {
    const mockProduct = [];
    for (let i = 0; i < 10; i++) {
        mockProduct.push(
            {
                date: new Date(),
                price: 300,
                id: '8484994-133939',
                size: 12,
                face: '(`` ^)'
            }
        )
    }
    ProductsComponent.setState({
        products: mockProduct
    })
    expect(
        ProductsComponent.state().products.length
    ).toEqual(10)
});





