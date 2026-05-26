import React from 'react';

export interface LanDropletPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPercentSolid: React.FC<LanDropletPercentSolidProps>;
export default LanDropletPercentSolid;
