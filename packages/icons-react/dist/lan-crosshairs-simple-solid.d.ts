import React from 'react';

export interface LanCrosshairsSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsSimpleSolid: React.FC<LanCrosshairsSimpleSolidProps>;
export default LanCrosshairsSimpleSolid;
