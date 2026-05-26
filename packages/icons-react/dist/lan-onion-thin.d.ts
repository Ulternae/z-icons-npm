import React from 'react';

export interface LanOnionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOnionThin: React.FC<LanOnionThinProps>;
export default LanOnionThin;
