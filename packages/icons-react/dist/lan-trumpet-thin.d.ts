import React from 'react';

export interface LanTrumpetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrumpetThin: React.FC<LanTrumpetThinProps>;
export default LanTrumpetThin;
