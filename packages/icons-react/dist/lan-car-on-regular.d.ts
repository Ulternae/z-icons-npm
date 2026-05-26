import React from 'react';

export interface LanCarOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarOnRegular: React.FC<LanCarOnRegularProps>;
export default LanCarOnRegular;
