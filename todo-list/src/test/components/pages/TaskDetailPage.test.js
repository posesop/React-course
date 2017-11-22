import React from 'react';
import TaskDetailPage from 'components/pages/TaskDetailPage';
import { shallow } from 'enzyme';

describe ('TaskDetailPage component', () => {
  it('Should render without crashing', () => {
    const componentInstance = shallow(<TaskDetailPage />);

    expect(componentInstance).not.toBeUndefined();
  });
});