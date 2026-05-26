import React from 'react';

export interface LanTabletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablets: React.FC<LanTabletsProps>;
export default LanTablets;
