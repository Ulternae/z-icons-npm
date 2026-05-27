import React from 'react';

export interface CoreCircleArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleArrowDown: React.FC<CoreCircleArrowDownProps>;
export default CoreCircleArrowDown;
