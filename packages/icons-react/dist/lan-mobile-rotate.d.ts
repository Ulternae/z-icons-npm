import React from 'react';

export interface LanMobileRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRotate: React.FC<LanMobileRotateProps>;
export default LanMobileRotate;
