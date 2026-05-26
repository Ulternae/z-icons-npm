import React from 'react';

export interface LanUserViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserViewfinderThin: React.FC<LanUserViewfinderThinProps>;
export default LanUserViewfinderThin;
