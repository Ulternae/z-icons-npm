import React from 'react';

export interface LanPooBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooBoltThin: React.FC<LanPooBoltThinProps>;
export default LanPooBoltThin;
