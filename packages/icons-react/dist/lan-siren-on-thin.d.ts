import React from 'react';

export interface LanSirenOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenOnThin: React.FC<LanSirenOnThinProps>;
export default LanSirenOnThin;
