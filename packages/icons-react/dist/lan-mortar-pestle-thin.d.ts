import React from 'react';

export interface LanMortarPestleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarPestleThin: React.FC<LanMortarPestleThinProps>;
export default LanMortarPestleThin;
