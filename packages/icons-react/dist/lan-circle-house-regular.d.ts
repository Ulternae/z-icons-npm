import React from 'react';

export interface LanCircleHouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHouseRegular: React.FC<LanCircleHouseRegularProps>;
export default LanCircleHouseRegular;
