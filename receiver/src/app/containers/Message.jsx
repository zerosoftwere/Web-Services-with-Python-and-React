import { connect } from 'react-redux';
import { addMessage, removeMessage } from '../store/actions';
import MessageList from '../componets/MessageList';

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveMessage(index) {
            dispatch(removeMessage(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);