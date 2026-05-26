import React from 'react';

export interface LanHammerBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerBrushSolid: React.FC<LanHammerBrushSolidProps>;
export default LanHammerBrushSolid;
