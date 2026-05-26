import React from 'react';

export interface LanLessThanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThanThin: React.FC<LanLessThanThinProps>;
export default LanLessThanThin;
