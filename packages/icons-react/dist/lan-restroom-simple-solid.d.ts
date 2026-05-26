import React from 'react';

export interface LanRestroomSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomSimpleSolid: React.FC<LanRestroomSimpleSolidProps>;
export default LanRestroomSimpleSolid;
