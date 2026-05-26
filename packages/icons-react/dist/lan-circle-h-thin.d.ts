import React from 'react';

export interface LanCircleHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHThin: React.FC<LanCircleHThinProps>;
export default LanCircleHThin;
