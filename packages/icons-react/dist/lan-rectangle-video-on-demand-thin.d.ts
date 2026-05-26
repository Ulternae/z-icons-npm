import React from 'react';

export interface LanRectangleVideoOnDemandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVideoOnDemandThin: React.FC<LanRectangleVideoOnDemandThinProps>;
export default LanRectangleVideoOnDemandThin;
