import React from 'react';

export interface LanHeadSideGearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideGearRegular: React.FC<LanHeadSideGearRegularProps>;
export default LanHeadSideGearRegular;
