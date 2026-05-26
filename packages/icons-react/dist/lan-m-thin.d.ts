import React from 'react';

export interface LanMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMThin: React.FC<LanMThinProps>;
export default LanMThin;
