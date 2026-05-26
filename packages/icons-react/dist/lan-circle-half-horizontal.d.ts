import React from 'react';

export interface LanCircleHalfHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfHorizontal: React.FC<LanCircleHalfHorizontalProps>;
export default LanCircleHalfHorizontal;
