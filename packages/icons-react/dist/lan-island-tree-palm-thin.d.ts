import React from 'react';

export interface LanIslandTreePalmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIslandTreePalmThin: React.FC<LanIslandTreePalmThinProps>;
export default LanIslandTreePalmThin;
