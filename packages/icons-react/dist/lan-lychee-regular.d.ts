import React from 'react';

export interface LanLycheeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLycheeRegular: React.FC<LanLycheeRegularProps>;
export default LanLycheeRegular;
