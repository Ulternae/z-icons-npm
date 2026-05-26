import React from 'react';

export interface LanCircleEllipsisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEllipsisThin: React.FC<LanCircleEllipsisThinProps>;
export default LanCircleEllipsisThin;
