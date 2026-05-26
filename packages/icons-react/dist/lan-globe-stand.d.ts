import React from 'react';

export interface LanGlobeStandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeStand: React.FC<LanGlobeStandProps>;
export default LanGlobeStand;
