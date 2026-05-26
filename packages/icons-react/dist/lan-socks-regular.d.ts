import React from 'react';

export interface LanSocksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSocksRegular: React.FC<LanSocksRegularProps>;
export default LanSocksRegular;
