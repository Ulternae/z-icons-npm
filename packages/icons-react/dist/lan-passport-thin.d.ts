import React from 'react';

export interface LanPassportThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPassportThin: React.FC<LanPassportThinProps>;
export default LanPassportThin;
