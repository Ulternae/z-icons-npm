import React from 'react';

export interface LanBoxIsometricTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricTapeSolid: React.FC<LanBoxIsometricTapeSolidProps>;
export default LanBoxIsometricTapeSolid;
