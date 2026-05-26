import React from 'react';

export interface LanBarProgressHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressHalfThin: React.FC<LanBarProgressHalfThinProps>;
export default LanBarProgressHalfThin;
