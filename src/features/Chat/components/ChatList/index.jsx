import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
ChatList.propTypes = {
  messageList: PropTypes.array,
};

ChatList.defaultProps = {
  messageList: [],
};

function ChatList(props) {
  const { messageList } = props;

  return (
    <div className="content__body">
      <div className="chat__items">
        {messageList.map((message, index) => (
          <div style={{ animationDelay: `0.8s` }} className="chat__item other" key={index}>
            <div className="chat__item__content">
              <div className="chat__msg" >
                {message.message}
              </div>
              <div className="chat__meta">
                <span>16 mins ago</span>
                <span>Seen 1.03 PM</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
