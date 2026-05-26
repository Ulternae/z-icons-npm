import React from 'react';

export interface LanBoxUsdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxUsdRegular: React.FC<LanBoxUsdRegularProps>;
export default LanBoxUsdRegular;
