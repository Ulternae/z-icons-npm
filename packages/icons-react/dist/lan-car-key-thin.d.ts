import React from 'react';

export interface LanCarKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarKeyThin: React.FC<LanCarKeyThinProps>;
export default LanCarKeyThin;
