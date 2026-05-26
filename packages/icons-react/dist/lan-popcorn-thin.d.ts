import React from 'react';

export interface LanPopcornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopcornThin: React.FC<LanPopcornThinProps>;
export default LanPopcornThin;
