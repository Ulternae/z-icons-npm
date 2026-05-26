import React from 'react';

export interface LanBoxIsometricThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricThin: React.FC<LanBoxIsometricThinProps>;
export default LanBoxIsometricThin;
