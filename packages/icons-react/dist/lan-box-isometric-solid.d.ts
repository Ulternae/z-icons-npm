import React from 'react';

export interface LanBoxIsometricSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricSolid: React.FC<LanBoxIsometricSolidProps>;
export default LanBoxIsometricSolid;
