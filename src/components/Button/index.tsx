import { Icon } from '../../utils/icons/icons';
import { IButtonProps } from './types/IButtonProps';
import './styles/index.scss';

export const Button = ({
  title,
  iconName,
  selected,
  ...rest
}: IButtonProps) => {
  return (
    <button
      type="button"
      {...(selected && { className: 'selected' })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
};
