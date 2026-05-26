import React from 'react';

export interface LanVenusDoubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusDoubleRegular: React.FC<LanVenusDoubleRegularProps>;
export default LanVenusDoubleRegular;
