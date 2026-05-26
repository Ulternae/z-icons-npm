import React from 'react';

export interface LanHeartCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleCheckThin: React.FC<LanHeartCircleCheckThinProps>;
export default LanHeartCircleCheckThin;
