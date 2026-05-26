import React from 'react';

export interface LanVialVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVerticalSolid: React.FC<LanVialVerticalSolidProps>;
export default LanVialVerticalSolid;
