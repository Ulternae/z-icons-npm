import React from 'react';

export interface LanDiamonds4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamonds4: React.FC<LanDiamonds4Props>;
export default LanDiamonds4;
