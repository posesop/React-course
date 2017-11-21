import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getModal } from 'redux/modal/reducer';
import { closeModal } from 'redux/modal/actions';

import './styles.css';
import RemoveTaskDialog from './RemoveTaskDialog';

const MODAL_COMPONENTES = {
  RemoveTaskDialog
}

class Modal extends Component {
  render() {
    const { child, childProps } = this.props;
    const ModalChild = MODAL_COMPONENTES[child] || null;

    return (
      child ? 
      <section className="modal">
        <div className="modal__content">
          <button onClick={this.props.closeModal} className="modal__btn" role="img">✖︎</button>
          {<ModalChild {...childProps}/>}
        </div>
      </section> : null
    )
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  child: PropTypes.oneOfType([
    PropTypes.object, 
    PropTypes.string
  ]),
  childProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...getModal(state),
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);