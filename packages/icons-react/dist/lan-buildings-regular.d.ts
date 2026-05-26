import React from 'react';

export interface LanBuildingsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingsRegular: React.FC<LanBuildingsRegularProps>;
export default LanBuildingsRegular;
