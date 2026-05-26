import React from 'react';

export interface LanCarBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBuildingRegular: React.FC<LanCarBuildingRegularProps>;
export default LanCarBuildingRegular;
