import React from 'react';

export interface LanBoxIsometricProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxIsometric: React.FC<LanBoxIsometricProps>;
export default LanBoxIsometric;
