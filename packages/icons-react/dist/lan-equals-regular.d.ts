import React from 'react';

export interface LanEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEqualsRegular: React.FC<LanEqualsRegularProps>;
export default LanEqualsRegular;
