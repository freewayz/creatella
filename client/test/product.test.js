import React from 'react';
import { shallow } from 'enzyme';
import Product from '../src/components/product';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const sampleFace = '( ͡° ͜ʖ ͡°)';
const sampleDate = new Date();
const diff = sampleDate.getDate() - 3;
sampleDate.setDate(diff);
const ProductComponent = shallow(<Product
    face={sampleFace}
    size={10}
    price={230}
    date={sampleDate}
/>);

test('Product component rendered correct price and size', () => {
    expect(
        ProductComponent.find('.price').text()
    ).toEqual('US $2.30 / Size 10')
});

test('Product component show right date information', () => {
    expect(
        ProductComponent.find('.date').text()
    ).toEqual('3 days ago ')
});