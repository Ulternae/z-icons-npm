import React from 'react';

export interface LanPersonRaysRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRaysRegular: React.FC<LanPersonRaysRegularProps>;
export default LanPersonRaysRegular;
