import React from 'react';

export interface LanRamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRamThin: React.FC<LanRamThinProps>;
export default LanRamThin;
