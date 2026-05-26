import React from 'react';

export interface LanAlmostEqualToRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlmostEqualToRegular: React.FC<LanAlmostEqualToRegularProps>;
export default LanAlmostEqualToRegular;
