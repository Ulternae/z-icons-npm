import React from 'react';

export interface LanBoxIsometricTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricTapeThin: React.FC<LanBoxIsometricTapeThinProps>;
export default LanBoxIsometricTapeThin;
