import React from 'react';

export interface LanRoadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoad: React.FC<LanRoadProps>;
export default LanRoad;
