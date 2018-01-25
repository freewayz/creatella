import React from 'react';
import { shallow , configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../src/components/header-nav';


configure({ adapter: new Adapter() });

test('Header Nav should render correctly', () => {
    const HeaderWrapper = shallow(<Header/>);

    expect(HeaderWrapper.find('h2').text()).toEqual('PRODUCTS GRID')
})