import React, {PropTypes} from 'react';
import classnames from 'classnames';
import BEM from '../../util/bem';
import './$NAME.scss';

const bem = new BEM('nmbl-$NAME');

const $NAME = ({className, children}) => {
    return (
        
    );
};

$NAME .propTypes = {
    children: PropTypes.element.isRequired,
};

export default $NAME;
