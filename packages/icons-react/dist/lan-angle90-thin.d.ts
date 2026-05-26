import React from 'react';

export interface LanAngle90ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngle90Thin: React.FC<LanAngle90ThinProps>;
export default LanAngle90Thin;
