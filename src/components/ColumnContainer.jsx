import PropTypes from 'prop-types';

const ColumnContainer = (props) => {
    const { column } = props;
    return <div>{column.title}</div>;
};

ColumnContainer.propTypes = {
    column: PropTypes.object.isRequired,
};

export default ColumnContainer;


