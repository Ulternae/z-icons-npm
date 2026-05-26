import React from 'react';

export interface LanTreeLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeLargeRegular: React.FC<LanTreeLargeRegularProps>;
export default LanTreeLargeRegular;
