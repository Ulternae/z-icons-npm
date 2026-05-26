import React from 'react';

export interface LanCircleHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalf: React.FC<LanCircleHalfProps>;
export default LanCircleHalf;
