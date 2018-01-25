import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SorterComponent from '../src/components/sorter';


configure({ adapter: new Adapter()})

const SorterWrapper = shallow(<SorterComponent/>);

test('Sorter Component rendered correctly', () => {
    expect(SorterWrapper.find('.title').text()).toEqual('Sort Product By:')
});