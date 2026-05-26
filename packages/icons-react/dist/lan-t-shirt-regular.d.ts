import React from 'react';

export interface LanTShirtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTShirtRegular: React.FC<LanTShirtRegularProps>;
export default LanTShirtRegular;
