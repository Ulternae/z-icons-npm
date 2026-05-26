import React from 'react';

export interface LanHandPointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointerRegular: React.FC<LanHandPointerRegularProps>;
export default LanHandPointerRegular;
