import React from 'react';

export interface LanGreaterThanEqualThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThanEqualThin: React.FC<LanGreaterThanEqualThinProps>;
export default LanGreaterThanEqualThin;
