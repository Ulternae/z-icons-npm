import React from 'react';

export interface LanCircleSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSThin: React.FC<LanCircleSThinProps>;
export default LanCircleSThin;
