import React from 'react';

export interface LanUnicornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicornRegular: React.FC<LanUnicornRegularProps>;
export default LanUnicornRegular;
