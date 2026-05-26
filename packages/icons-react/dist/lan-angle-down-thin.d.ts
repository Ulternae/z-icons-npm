import React from 'react';

export interface LanAngleDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDownThin: React.FC<LanAngleDownThinProps>;
export default LanAngleDownThin;
