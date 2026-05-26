import React from 'react';

export interface LanVideoPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoPlus: React.FC<LanVideoPlusProps>;
export default LanVideoPlus;
