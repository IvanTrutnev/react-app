import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
      openItemID: null
    }
    render() {
      return <OriginalComponent {...this.props} accordeon={{...this.state, toggleItem: this.toggleItem}}/>
    }

    toggleItem = itemID => (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        if (this.state.openItemID === itemID) {
            this.setState({
                openItemID: null
            });
        } else {
            this.setState({
                openItemID: itemID
            });
        }
    };
}
