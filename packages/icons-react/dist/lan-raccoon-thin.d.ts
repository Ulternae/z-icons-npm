import React from 'react';

export interface LanRaccoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaccoonThin: React.FC<LanRaccoonThinProps>;
export default LanRaccoonThin;
