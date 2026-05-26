import React from 'react';

export interface LanFileTexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTexThin: React.FC<LanFileTexThinProps>;
export default LanFileTexThin;
