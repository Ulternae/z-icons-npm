import React from 'react';

export interface LanGlobeStandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeStandThin: React.FC<LanGlobeStandThinProps>;
export default LanGlobeStandThin;
