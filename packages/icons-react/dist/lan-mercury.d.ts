import React from 'react';

export interface LanMercuryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMercury: React.FC<LanMercuryProps>;
export default LanMercury;
