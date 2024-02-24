import PropTypes from 'prop-types';
import cn from '../utils/cn';

export default function Anchor({ href, children, className }) {
  return (
    <a
      href={href}
      target='_blank'
      className={cn(
        'font-medium bg-slate-50 hover:bg-slate-100 px-2 py-1 rounded-sm',
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
