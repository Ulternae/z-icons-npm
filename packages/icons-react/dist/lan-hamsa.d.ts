import React from 'react';

export interface LanHamsaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHamsa: React.FC<LanHamsaProps>;
export default LanHamsa;
