import React from 'react';

export interface LanGlassHalfFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassHalfFullSolid: React.FC<LanGlassHalfFullSolidProps>;
export default LanGlassHalfFullSolid;
