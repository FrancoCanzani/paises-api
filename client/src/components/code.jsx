import PropTypes from 'prop-types';
import cn from '../utils/cn';

export default function Code({ children, className }) {
  return (
    <h2
      className={cn(
        'font-medium p-2 overflow-hidden text-wrap rounded-sm bg-gray-200 shadow-sm border',
        className
      )}
    >
      {children}
    </h2>
  );
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
