import React from 'react';

export interface LanBoxIsometricTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometricTape: React.FC<LanBoxIsometricTapeProps>;
export default LanBoxIsometricTape;
