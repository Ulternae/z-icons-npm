import React from 'react';

export interface LanFrancSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrancSignSolid: React.FC<LanFrancSignSolidProps>;
export default LanFrancSignSolid;
