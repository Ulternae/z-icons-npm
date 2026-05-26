import React from 'react';

export interface LanBalanceScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScaleSolid: React.FC<LanBalanceScaleSolidProps>;
export default LanBalanceScaleSolid;
