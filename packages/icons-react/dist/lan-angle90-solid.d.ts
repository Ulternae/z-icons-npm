import React from 'react';

export interface LanAngle90SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngle90Solid: React.FC<LanAngle90SolidProps>;
export default LanAngle90Solid;
