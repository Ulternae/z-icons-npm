import React from 'react';

export interface LanHouseBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseBuildingRegular: React.FC<LanHouseBuildingRegularProps>;
export default LanHouseBuildingRegular;
