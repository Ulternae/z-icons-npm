import React from 'react';

export interface LanAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanA: React.FC<LanAProps>;
export default LanA;
