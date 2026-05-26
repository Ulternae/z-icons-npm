import React from 'react';

export interface LanUserBeardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserBeardThin: React.FC<LanUserBeardThinProps>;
export default LanUserBeardThin;
