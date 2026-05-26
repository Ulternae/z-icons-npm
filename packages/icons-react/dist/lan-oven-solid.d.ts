import React from 'react';

export interface LanOvenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOvenSolid: React.FC<LanOvenSolidProps>;
export default LanOvenSolid;
