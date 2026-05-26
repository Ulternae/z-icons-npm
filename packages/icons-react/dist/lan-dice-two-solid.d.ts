import React from 'react';

export interface LanDiceTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceTwoSolid: React.FC<LanDiceTwoSolidProps>;
export default LanDiceTwoSolid;
