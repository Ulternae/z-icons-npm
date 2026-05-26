import React from 'react';

export interface LanMercuryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMercuryThin: React.FC<LanMercuryThinProps>;
export default LanMercuryThin;
