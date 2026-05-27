import React from 'react';

export interface CoreArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowsRotate: React.FC<CoreArrowsRotateProps>;
export default CoreArrowsRotate;
