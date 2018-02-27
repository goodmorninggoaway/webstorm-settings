const React = require('react');
const { shallow } = require('enzyme');
const $NAME = require('./$NAME').default;

describe('$NAME', () => {
    it('should do it', () => {
        const props = {};
        const actual = shallow(<$NAME {...props} />);
        expect(actual).not.to.be.undefined();
    });
});