import React from 'react';

export interface LanHouseTsunamiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTsunamiThin: React.FC<LanHouseTsunamiThinProps>;
export default LanHouseTsunamiThin;
