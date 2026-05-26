import React from 'react';

export interface LanIslandTreePalmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIslandTreePalm: React.FC<LanIslandTreePalmProps>;
export default LanIslandTreePalm;
