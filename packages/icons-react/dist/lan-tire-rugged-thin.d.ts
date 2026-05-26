import React from 'react';

export interface LanTireRuggedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireRuggedThin: React.FC<LanTireRuggedThinProps>;
export default LanTireRuggedThin;
