import React from 'react';

export interface LanAnchorCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorCircleCheck: React.FC<LanAnchorCircleCheckProps>;
export default LanAnchorCircleCheck;
