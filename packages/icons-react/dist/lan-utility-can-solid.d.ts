import React from 'react';

export interface LanUtilityCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityCanSolid: React.FC<LanUtilityCanSolidProps>;
export default LanUtilityCanSolid;
