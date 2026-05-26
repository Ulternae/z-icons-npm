import React from 'react';

export interface LanCrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrow: React.FC<LanCrowProps>;
export default LanCrow;
