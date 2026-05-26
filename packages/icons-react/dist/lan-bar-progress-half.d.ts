import React from 'react';

export interface LanBarProgressHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressHalf: React.FC<LanBarProgressHalfProps>;
export default LanBarProgressHalf;
