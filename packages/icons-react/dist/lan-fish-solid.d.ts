import React from 'react';

export interface LanFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishSolid: React.FC<LanFishSolidProps>;
export default LanFishSolid;
