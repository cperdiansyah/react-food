import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './button.scss';

export default function Button(props) {
  const className = [props.className];
  if (props.isBlock) className.push('block');
  if (props.isDisabled) className.push('disabled');
  if (props.hasShadow) className.push('shadow-md');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading || props.isDisabled) {
    if (props.isDisabled) className.push('disabled');
    return (
      <span className={className.join(' ')}>
        {props.isLoading ? (
          <>
            <div class="flex justify-center items-center">
              <div
                class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          className={className.join(' ')}
          href={props.href}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <NavLink
          className={className.join(' ')}
          to={props.href}
          onClick={onClick}
        >
          {props.children}
        </NavLink>
      );
    }
  }

  return (
    <button className={className.join(' ')} onClick={onClick}>
      {props.clidren}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,

  isBlock: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasShadow: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.any,
};
