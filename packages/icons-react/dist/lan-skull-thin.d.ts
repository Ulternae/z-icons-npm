import React from 'react';

export interface LanSkullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullThin: React.FC<LanSkullThinProps>;
export default LanSkullThin;
