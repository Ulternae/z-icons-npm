import React from 'react';

export interface LanVenusDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusDouble: React.FC<LanVenusDoubleProps>;
export default LanVenusDouble;
