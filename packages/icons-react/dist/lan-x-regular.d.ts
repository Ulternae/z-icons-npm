import React from 'react';

export interface LanXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXRegular: React.FC<LanXRegularProps>;
export default LanXRegular;
