import React from 'react';

export interface LanCircleSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSmallThin: React.FC<LanCircleSmallThinProps>;
export default LanCircleSmallThin;
