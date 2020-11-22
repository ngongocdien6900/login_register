import React from 'react';
import PropTypes from 'prop-types';

ChatItem.propTypes = {
    message: PropTypes.object,
};

ChatItem.defaultProps = {
    message: {},
};

function ChatItem(props) {

    const { message } = props;

    return (
        <li>
            {message}
        </li>
    );
}

export default ChatItem;