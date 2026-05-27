import React from 'react';

export interface CoreArrowRotateRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowRotateRight: React.FC<CoreArrowRotateRightProps>;
export default CoreArrowRotateRight;
