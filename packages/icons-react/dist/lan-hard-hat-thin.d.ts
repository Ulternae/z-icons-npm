import React from 'react';

export interface LanHardHatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardHatThin: React.FC<LanHardHatThinProps>;
export default LanHardHatThin;
