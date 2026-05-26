import React from 'react';

export interface LanBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingRegular: React.FC<LanBuildingRegularProps>;
export default LanBuildingRegular;
