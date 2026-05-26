import React from 'react';

export interface LanOctopusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctopusRegular: React.FC<LanOctopusRegularProps>;
export default LanOctopusRegular;
