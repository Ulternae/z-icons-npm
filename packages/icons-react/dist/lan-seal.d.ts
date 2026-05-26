import React from 'react';

export interface LanSealProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeal: React.FC<LanSealProps>;
export default LanSeal;
