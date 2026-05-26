import React from 'react';

export interface LanEyeLowVisionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeLowVisionSolid: React.FC<LanEyeLowVisionSolidProps>;
export default LanEyeLowVisionSolid;
