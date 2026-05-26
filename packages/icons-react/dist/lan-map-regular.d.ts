import React from 'react';

export interface LanMapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapRegular: React.FC<LanMapRegularProps>;
export default LanMapRegular;
