import React from 'react';

export interface LanHockeyMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyMaskSolid: React.FC<LanHockeyMaskSolidProps>;
export default LanHockeyMaskSolid;
