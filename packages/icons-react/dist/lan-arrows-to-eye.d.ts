import React from 'react';

export interface LanArrowsToEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToEye: React.FC<LanArrowsToEyeProps>;
export default LanArrowsToEye;
