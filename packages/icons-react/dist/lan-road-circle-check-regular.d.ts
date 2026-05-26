import React from 'react';

export interface LanRoadCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadCircleCheckRegular: React.FC<LanRoadCircleCheckRegularProps>;
export default LanRoadCircleCheckRegular;
