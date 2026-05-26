import React from 'react';

export interface LanMugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugSolid: React.FC<LanMugSolidProps>;
export default LanMugSolid;
