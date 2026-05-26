import React from 'react';

export interface LanDiceSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceSixSolid: React.FC<LanDiceSixSolidProps>;
export default LanDiceSixSolid;
