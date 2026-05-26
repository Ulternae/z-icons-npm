import React from 'react';

export interface LanRectangleVideoOnDemandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVideoOnDemand: React.FC<LanRectangleVideoOnDemandProps>;
export default LanRectangleVideoOnDemand;
