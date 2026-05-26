import React from 'react';

export interface LanAngleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngle: React.FC<LanAngleProps>;
export default LanAngle;
