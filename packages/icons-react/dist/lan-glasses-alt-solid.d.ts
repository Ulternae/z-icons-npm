import React from 'react';

export interface LanGlassesAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesAltSolid: React.FC<LanGlassesAltSolidProps>;
export default LanGlassesAltSolid;
