import React from 'react';

export interface LanKayakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKayakRegular: React.FC<LanKayakRegularProps>;
export default LanKayakRegular;
