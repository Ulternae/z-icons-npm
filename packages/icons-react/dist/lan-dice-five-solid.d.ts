import React from 'react';

export interface LanDiceFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFiveSolid: React.FC<LanDiceFiveSolidProps>;
export default LanDiceFiveSolid;
