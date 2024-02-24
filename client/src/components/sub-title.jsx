import PropTypes from 'prop-types';
import cn from '../utils/cn';

export default function SubTitle({ children, className }) {
  return (
    <h2 className={cn('capitalize font-medium mb-2', className)}>{children}</h2>
  );
}

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
