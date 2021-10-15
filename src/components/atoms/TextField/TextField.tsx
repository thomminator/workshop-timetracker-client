import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './TextField.module.scss';

interface Props {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  format?: 'time';
}

function TextField({
  className,
  placeholder,
  defaultValue = '',
  format,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className={clsx(className, styles.main)}>
      <input
        maxLength={format === 'time' ? 5 : undefined}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
