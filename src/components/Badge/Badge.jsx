import './Badge.scss'
import classNames from 'classnames'

const Badge = (props) => {
  const {
    className,
    /**
     * '' (default) | 'accent'
     */
    mode = '',
    isBig = false,
    children,
  } = props

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {children}
    </div>
  )
}

export default Badge
