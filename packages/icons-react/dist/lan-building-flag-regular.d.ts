import React from 'react';

export interface LanBuildingFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingFlagRegular: React.FC<LanBuildingFlagRegularProps>;
export default LanBuildingFlagRegular;
