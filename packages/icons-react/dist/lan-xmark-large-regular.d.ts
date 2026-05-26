import React from 'react';

export interface LanXmarkLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarkLargeRegular: React.FC<LanXmarkLargeRegularProps>;
export default LanXmarkLargeRegular;
