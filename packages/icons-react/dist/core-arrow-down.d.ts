import React from 'react';

export interface CoreArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowDown: React.FC<CoreArrowDownProps>;
export default CoreArrowDown;
