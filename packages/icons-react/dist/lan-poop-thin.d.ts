import React from 'react';

export interface LanPoopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoopThin: React.FC<LanPoopThinProps>;
export default LanPoopThin;
