import type { ReactNode } from 'react';

export interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export interface TextProps {
  children: React.ReactNode;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
}