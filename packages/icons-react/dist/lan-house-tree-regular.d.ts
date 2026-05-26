import React from 'react';

export interface LanHouseTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTreeRegular: React.FC<LanHouseTreeRegularProps>;
export default LanHouseTreeRegular;
