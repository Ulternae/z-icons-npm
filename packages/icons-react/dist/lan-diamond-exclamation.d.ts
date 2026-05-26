import React from 'react';

export interface LanDiamondExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondExclamation: React.FC<LanDiamondExclamationProps>;
export default LanDiamondExclamation;
