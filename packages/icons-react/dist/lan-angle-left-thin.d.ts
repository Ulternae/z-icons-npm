import React from 'react';

export interface LanAngleLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleLeftThin: React.FC<LanAngleLeftThinProps>;
export default LanAngleLeftThin;
