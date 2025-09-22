import React from 'react';
import type { TextProps } from '@/types/typography';
import { classNames } from '@/lib/utils';

const Text: React.FC<TextProps> = ({ children, weight = 'normal', size = 'base', className = '' }: TextProps) => (
  <p className={classNames(`font-${weight} text-${size}`, className)}>{children}</p>
);

export default Text;
