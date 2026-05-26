import React from 'react';

export interface LanOutletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOutletRegular: React.FC<LanOutletRegularProps>;
export default LanOutletRegular;
