import React from 'react';

export interface LanBackpackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackpackThin: React.FC<LanBackpackThinProps>;
export default LanBackpackThin;
