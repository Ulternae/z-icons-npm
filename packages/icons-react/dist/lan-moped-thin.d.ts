import React from 'react';

export interface LanMopedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMopedThin: React.FC<LanMopedThinProps>;
export default LanMopedThin;
