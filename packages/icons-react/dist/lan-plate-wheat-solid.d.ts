import React from 'react';

export interface LanPlateWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateWheatSolid: React.FC<LanPlateWheatSolidProps>;
export default LanPlateWheatSolid;
