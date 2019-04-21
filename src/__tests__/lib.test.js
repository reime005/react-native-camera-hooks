import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson, { createSerializer } from 'enzyme-to-json';
import { ExampleComponent } from '../../example/ExampleComponent';
import { initialCameraState } from '../initialState';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

configure({ adapter: new Adapter() });

describe('React Native Camera Hooks', () => {
  test('renders default', () => {
    const wrapper = shallow(<ExampleComponent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders with flipped side and simple regex checks', () => {
    let wrapper = shallow(
      <ExampleComponent
        initialProps={{ ...initialCameraState, type: 'front', ratio: '16:9' }}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();

    expect(JSON.stringify(toJson(wrapper))).not.toMatch(/"back"/);

    wrapper = shallow(
      <ExampleComponent
        initialProps={{ ...initialCameraState, type: 'back', ratio: '16:9' }}
      />
    );

    expect(JSON.stringify(toJson(wrapper))).toMatch(/"back"/);
  });
});
