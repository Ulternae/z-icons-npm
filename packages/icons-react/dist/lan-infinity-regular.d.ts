import React from 'react';

export interface LanInfinityRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfinityRegular: React.FC<LanInfinityRegularProps>;
export default LanInfinityRegular;
