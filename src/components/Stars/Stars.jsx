import PropTypes from 'prop-types';
import Star from './Star';
import shortid from 'shortid';

function Stars(props) {
    const { count } = props;

    return (
        <ul className="card-body-stars">
            {count > 0 && count < 6 && [...Array(count)].map((e, i) => <Star key={shortid.generate()}/>)}
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