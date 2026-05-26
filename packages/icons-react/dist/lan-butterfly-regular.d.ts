import React from 'react';

export interface LanButterflyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButterflyRegular: React.FC<LanButterflyRegularProps>;
export default LanButterflyRegular;
