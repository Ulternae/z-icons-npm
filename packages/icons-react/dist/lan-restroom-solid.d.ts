import React from 'react';

export interface LanRestroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomSolid: React.FC<LanRestroomSolidProps>;
export default LanRestroomSolid;
