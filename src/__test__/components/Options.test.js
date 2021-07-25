import React from 'react';
import renderer from 'react-test-renderer';
import Option from '../../components/Options';

describe('Option', () => {
    it('renders correctly', () => {
      const options = ['1', '2', '3'].map((option) => <option key={option}>{option}</option>);
      const tree = renderer
        .create(<Option
          id="dishType"
          options={options}
          value="4"
        />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
