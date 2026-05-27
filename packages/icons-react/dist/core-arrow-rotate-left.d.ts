import React from 'react';

export interface CoreArrowRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowRotateLeft: React.FC<CoreArrowRotateLeftProps>;
export default CoreArrowRotateLeft;
