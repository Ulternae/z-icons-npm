import React from 'react';

export interface LanDiceFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFourSolid: React.FC<LanDiceFourSolidProps>;
export default LanDiceFourSolid;
