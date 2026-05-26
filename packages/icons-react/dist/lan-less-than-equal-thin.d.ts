import React from 'react';

export interface LanLessThanEqualThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThanEqualThin: React.FC<LanLessThanEqualThinProps>;
export default LanLessThanEqualThin;
