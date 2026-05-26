import React from 'react';

export interface LanKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKRegular: React.FC<LanKRegularProps>;
export default LanKRegular;
