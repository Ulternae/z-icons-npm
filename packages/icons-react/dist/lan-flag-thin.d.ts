import React from 'react';

export interface LanFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagThin: React.FC<LanFlagThinProps>;
export default LanFlagThin;
