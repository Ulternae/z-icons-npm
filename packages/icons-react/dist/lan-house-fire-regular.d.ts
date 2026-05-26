import React from 'react';

export interface LanHouseFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFireRegular: React.FC<LanHouseFireRegularProps>;
export default LanHouseFireRegular;
