import React from 'react';

export interface LanSprinklerCeilingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerCeilingThin: React.FC<LanSprinklerCeilingThinProps>;
export default LanSprinklerCeilingThin;
