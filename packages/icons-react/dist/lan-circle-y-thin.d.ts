import React from 'react';

export interface LanCircleYThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYThin: React.FC<LanCircleYThinProps>;
export default LanCircleYThin;
