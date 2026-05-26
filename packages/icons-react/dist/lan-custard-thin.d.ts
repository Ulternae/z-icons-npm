import React from 'react';

export interface LanCustardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCustardThin: React.FC<LanCustardThinProps>;
export default LanCustardThin;
