import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import getDisplayName from 'recompose/getDisplayName';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics';
import DecoratedConfig from '../../DecoratedConfig';

export default function $NAME(WrappedComponent) {
    class InfrastructureInjector extends Component {
        constructor(props) {
            super(props);
            autobind(this);
        }

        render() {
            const { config, scope } = { ...this.context.infrastructure, ...this.props };
            if (!config) {
                throw new Error(`${InfrastructureInjector.name} expects an object "infrastructure" to be in this.context.`);
            }

            return <WrappedComponent {...this.props} config={config} scope={scope} />;
        }
    }

    InfrastructureInjector.contextTypes = {
        infrastructure: PropTypes.shape({
            config: PropTypes.instanceOf(DecoratedConfig).isRequired,
            scope: PropTypes.shape({
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }),
        }),
    };

    /* eslint-disable react/no-unused-prop-types */
    InfrastructureInjector.propTypes = {
        config: PropTypes.instanceOf(DecoratedConfig),
        scope: PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }),
    };

    InfrastructureInjector.displayName = wrapDisplayName(WrappedComponent, getDisplayName(InfrastructureInjector));

    return hoistNonReactStatics(InfrastructureInjector, WrappedComponent);
}
