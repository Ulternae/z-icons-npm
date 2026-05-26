import React from 'react';

export interface LanHouseTsunamiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTsunami: React.FC<LanHouseTsunamiProps>;
export default LanHouseTsunami;
