import React from 'react';

export interface LanMinusLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusLargeRegular: React.FC<LanMinusLargeRegularProps>;
export default LanMinusLargeRegular;
