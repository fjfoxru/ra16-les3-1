import PropTypes from 'prop-types';
import Star from './Star';
import shortid from 'shortid';

function Stars(props) {
    const { count } = props;
    const isValid = count >= 1 && count <= 5;
	if (!isValid) {
		return null;
	}
    return (
        <ul className="card-body-stars">
            {[...Array(count)].map((e, i) => <Star key={shortid.generate()}/>)}
        </ul>
    )

}

Stars.defaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};


export default Stars;