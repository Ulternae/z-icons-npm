import React from 'react';

export interface LanHeartHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartHalfThin: React.FC<LanHeartHalfThinProps>;
export default LanHeartHalfThin;
