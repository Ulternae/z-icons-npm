import React from 'react';

export interface LanSprinklerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerThin: React.FC<LanSprinklerThinProps>;
export default LanSprinklerThin;
