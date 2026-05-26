import React from 'react';

export interface LanGroupArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGroupArrowsRotate: React.FC<LanGroupArrowsRotateProps>;
export default LanGroupArrowsRotate;
