import React from 'react';

export interface LanDiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceSolid: React.FC<LanDiceSolidProps>;
export default LanDiceSolid;
