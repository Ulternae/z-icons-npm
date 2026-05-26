import React from 'react';

export interface LanWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowThin: React.FC<LanWindowThinProps>;
export default LanWindowThin;
