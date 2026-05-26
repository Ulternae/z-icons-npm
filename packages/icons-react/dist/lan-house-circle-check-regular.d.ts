import React from 'react';

export interface LanHouseCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCircleCheckRegular: React.FC<LanHouseCircleCheckRegularProps>;
export default LanHouseCircleCheckRegular;
