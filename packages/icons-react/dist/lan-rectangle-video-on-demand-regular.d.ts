import React from 'react';

export interface LanRectangleVideoOnDemandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVideoOnDemandRegular: React.FC<LanRectangleVideoOnDemandRegularProps>;
export default LanRectangleVideoOnDemandRegular;
