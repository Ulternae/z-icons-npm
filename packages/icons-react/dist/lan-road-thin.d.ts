import React from 'react';

export interface LanRoadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadThin: React.FC<LanRoadThinProps>;
export default LanRoadThin;
