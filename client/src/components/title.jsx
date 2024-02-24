import PropTypes from 'prop-types';
import cn from '../utils/cn';

export default function Title({ children, className, id }) {
  return (
    <h2
      id={id}
      className={cn('text-lg capitalize font-medium mb-2', className)}
    >
      {children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};
