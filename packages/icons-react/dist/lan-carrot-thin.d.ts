import React from 'react';

export interface LanCarrotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarrotThin: React.FC<LanCarrotThinProps>;
export default LanCarrotThin;
