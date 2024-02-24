import PropTypes from 'prop-types';
import cn from '../utils/cn';

export default function Anchor({ href, children, className }) {
  return (
    <a
      href={href}
      target='_blank'
      className={cn(
        'font-medium bg-slate-900 hover:bg-slate-800 px-2 py-1 rounded-md',
        className
      )}
    >
      {children}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
