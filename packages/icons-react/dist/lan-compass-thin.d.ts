import React from 'react';

export interface LanCompassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassThin: React.FC<LanCompassThinProps>;
export default LanCompassThin;
