
import { classNames } from "@/lib/utils";
import { HeadingProps } from "@/types/typography";


export const H1 = ({ children, className = '' }: HeadingProps) => (
  <h1 className={classNames('text-[22px] font-bold font-inter', className)}>{children}</h1>
);

export const H2 = ({ children, className = '' }: HeadingProps) => (
  <h2 className={classNames('text-[20px] font-bold font-inter', className)}>{children}</h2>
);

export const H3 = ({ children, className = '' }: HeadingProps) => (
  <h3 className={classNames('text-[18px] font-bold font-inter', className)}>{children}</h3>
);

export const H4 = ({ children, className = '' }: HeadingProps) => (
  <h4 className={classNames('text-[17px] font-normal font-inter', className)}>{children}</h4>
);

export const H5 = ({ children, className = '' }: HeadingProps) => (
  <h5 className={classNames('text-[16px] font-light font-inter', className)}>{children}</h5>
);

export const P = ({ children, className = '' }: HeadingProps) => (
  <p className={classNames('text-[14px] leading-[16px] font-inter', className)}>{children}</p>
);
