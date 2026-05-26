import React from 'react';

export interface LanBuildingColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingColumnsRegular: React.FC<LanBuildingColumnsRegularProps>;
export default LanBuildingColumnsRegular;
