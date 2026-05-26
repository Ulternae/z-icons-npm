import React from 'react';

export interface LanPlugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugThin: React.FC<LanPlugThinProps>;
export default LanPlugThin;
