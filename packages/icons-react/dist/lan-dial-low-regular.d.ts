import React from 'react';

export interface LanDialLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialLowRegular: React.FC<LanDialLowRegularProps>;
export default LanDialLowRegular;
