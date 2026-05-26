import React from 'react';

export interface LanMobileRotateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRotateRegular: React.FC<LanMobileRotateRegularProps>;
export default LanMobileRotateRegular;
