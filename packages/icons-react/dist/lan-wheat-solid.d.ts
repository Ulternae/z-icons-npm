import React from 'react';

export interface LanWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatSolid: React.FC<LanWheatSolidProps>;
export default LanWheatSolid;
