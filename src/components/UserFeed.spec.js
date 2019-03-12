import React from 'react';
import renderer from 'react-test-renderer';
import UserFeed from './UserFeed';

describe('UserFeedComponent', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserFeed />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
