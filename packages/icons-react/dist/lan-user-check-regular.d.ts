import React from 'react';

export interface LanUserCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCheckRegular: React.FC<LanUserCheckRegularProps>;
export default LanUserCheckRegular;
