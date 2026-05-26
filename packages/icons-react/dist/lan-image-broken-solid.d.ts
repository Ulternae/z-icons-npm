import React from 'react';

export interface LanImageBrokenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageBrokenSolid: React.FC<LanImageBrokenSolidProps>;
export default LanImageBrokenSolid;
