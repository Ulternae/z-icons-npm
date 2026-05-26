import React from 'react';

export interface LanGreaterThanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThanThin: React.FC<LanGreaterThanThinProps>;
export default LanGreaterThanThin;
