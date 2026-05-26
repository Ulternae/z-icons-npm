import React from 'react';

export interface LanMangoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMangoRegular: React.FC<LanMangoRegularProps>;
export default LanMangoRegular;
