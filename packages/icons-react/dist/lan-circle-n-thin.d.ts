import React from 'react';

export interface LanCircleNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNThin: React.FC<LanCircleNThinProps>;
export default LanCircleNThin;
