import React from 'react';

export interface LanMeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeatSolid: React.FC<LanMeatSolidProps>;
export default LanMeatSolid;
