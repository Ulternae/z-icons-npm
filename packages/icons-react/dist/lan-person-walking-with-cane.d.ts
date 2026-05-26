import React from 'react';

export interface LanPersonWalkingWithCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalkingWithCane: React.FC<LanPersonWalkingWithCaneProps>;
export default LanPersonWalkingWithCane;
