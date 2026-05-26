import React from 'react';

export interface LanFileWordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWordRegular: React.FC<LanFileWordRegularProps>;
export default LanFileWordRegular;
