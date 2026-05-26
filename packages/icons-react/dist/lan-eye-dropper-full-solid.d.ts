import React from 'react';

export interface LanEyeDropperFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperFullSolid: React.FC<LanEyeDropperFullSolidProps>;
export default LanEyeDropperFullSolid;
