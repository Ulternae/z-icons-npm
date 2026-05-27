import React from 'react';

export interface CoreAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleDown: React.FC<CoreAngleDownProps>;
export default CoreAngleDown;
