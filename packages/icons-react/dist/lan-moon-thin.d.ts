import React from 'react';

export interface LanMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonThin: React.FC<LanMoonThinProps>;
export default LanMoonThin;
