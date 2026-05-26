import React from 'react';

export interface LanCardHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardHeartThin: React.FC<LanCardHeartThinProps>;
export default LanCardHeartThin;
