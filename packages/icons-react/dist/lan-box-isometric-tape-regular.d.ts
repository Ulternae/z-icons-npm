import React from 'react';

export interface LanBoxIsometricTapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricTapeRegular: React.FC<LanBoxIsometricTapeRegularProps>;
export default LanBoxIsometricTapeRegular;
