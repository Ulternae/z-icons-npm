import React from 'react';

export interface LanDragonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDragonRegular: React.FC<LanDragonRegularProps>;
export default LanDragonRegular;
