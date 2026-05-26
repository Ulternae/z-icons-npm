import React from 'react';

export interface LanAnchorCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorCircleCheckThin: React.FC<LanAnchorCircleCheckThinProps>;
export default LanAnchorCircleCheckThin;
