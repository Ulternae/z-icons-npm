import React from 'react';

export interface LanWindTurbineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindTurbineRegular: React.FC<LanWindTurbineRegularProps>;
export default LanWindTurbineRegular;
