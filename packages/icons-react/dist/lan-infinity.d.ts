import React from 'react';

export interface LanInfinityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfinity: React.FC<LanInfinityProps>;
export default LanInfinity;
