import React from 'react';

export interface LanGrillHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillHotSolid: React.FC<LanGrillHotSolidProps>;
export default LanGrillHotSolid;
