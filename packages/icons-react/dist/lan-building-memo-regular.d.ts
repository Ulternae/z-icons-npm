import React from 'react';

export interface LanBuildingMemoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingMemoRegular: React.FC<LanBuildingMemoRegularProps>;
export default LanBuildingMemoRegular;
