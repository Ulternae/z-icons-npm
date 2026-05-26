import React from 'react';

export interface LanArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsRotate: React.FC<LanArrowsRotateProps>;
export default LanArrowsRotate;
