import React from 'react';
import { shallow } from 'enzyme';
import Product from '../src/components/product';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
test('Product component rendered correctly', () => {
    const sampleFace = '( ͡° ͜ʖ ͡°)';
    const ProductComponent = shallow(<Product
        face={sampleFace}
        size={10}
        price={230}
        date={new Date()}
    />);

    expect(
        ProductComponent.find('.price').text()
    ).toEqual('US $2.30 / Size 10')
});