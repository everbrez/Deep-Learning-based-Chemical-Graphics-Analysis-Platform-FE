import classnames from 'classnames'
import React from 'react'
import Classes from './button.module.scss'

interface Props {
  type?: 'gradient' | 'normal' | 'danger'
  nativeType?: 'button' | 'submit' | 'reset' | undefined
  size?: 'large' | 'normal' | 'small'
  className?: string
  disabled?: boolean
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    type = 'normal',
    nativeType,
    size = 'normal',
    className: injectClass,
    disabled,
    ...others
  } = props

  const className = classnames(
    Classes.common,
    Classes[type],
    Classes[size],
    injectClass)

  return (
    <button className={className} type={nativeType} {...others} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
