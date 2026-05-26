import React from 'react';

export interface LanRoadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadRegular: React.FC<LanRoadRegularProps>;
export default LanRoadRegular;
