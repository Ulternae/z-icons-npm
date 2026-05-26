import React from 'react';

export interface LanIntegralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntegral: React.FC<LanIntegralProps>;
export default LanIntegral;
