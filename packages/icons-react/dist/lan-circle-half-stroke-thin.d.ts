import React from 'react';

export interface LanCircleHalfStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfStrokeThin: React.FC<LanCircleHalfStrokeThinProps>;
export default LanCircleHalfStrokeThin;
