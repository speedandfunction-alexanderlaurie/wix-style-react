import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditableListItem.st.css';
import { dataHooks } from './constants';
import Input from '../Input/Input';
import IconButton from '../IconButton';

/** EditableListItem */
class EditableListItem extends React.PureComponent {
  render() {
    const { dataHook } = this.props;
    return (
      <div {...styles('root', this.props)} data-hook={dataHook}>
        <div data-hook={dataHooks.editableListInputWrapper}>
          <Input />
        </div>
        <IconButton dataHook={dataHooks.editableListCancelButton} />
        <IconButton dataHook={dataHooks.editableListApproveButton} />
      </div>
    );
  }
}

EditableListItem.displayName = 'EditableListItem';

EditableListItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {};

export default EditableListItem;
