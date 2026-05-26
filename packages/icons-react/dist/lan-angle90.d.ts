import React from 'react';

export interface LanAngle90Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngle90: React.FC<LanAngle90Props>;
export default LanAngle90;
