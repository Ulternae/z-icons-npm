import React from 'react';

export interface LanAngleUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleUpThin: React.FC<LanAngleUpThinProps>;
export default LanAngleUpThin;
