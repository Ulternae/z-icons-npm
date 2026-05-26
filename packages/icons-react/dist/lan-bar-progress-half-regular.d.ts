import React from 'react';

export interface LanBarProgressHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressHalfRegular: React.FC<LanBarProgressHalfRegularProps>;
export default LanBarProgressHalfRegular;
