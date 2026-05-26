import React from 'react';

export interface LanDialMinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMinThin: React.FC<LanDialMinThinProps>;
export default LanDialMinThin;
