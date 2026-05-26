import React from 'react';

export interface LanDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanD: React.FC<LanDProps>;
export default LanD;
