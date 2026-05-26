import React from 'react';

export interface LanBoxIsometricRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricRegular: React.FC<LanBoxIsometricRegularProps>;
export default LanBoxIsometricRegular;
