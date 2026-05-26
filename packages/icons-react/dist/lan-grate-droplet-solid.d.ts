import React from 'react';

export interface LanGrateDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateDropletSolid: React.FC<LanGrateDropletSolidProps>;
export default LanGrateDropletSolid;
