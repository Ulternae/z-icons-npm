import React from 'react';

export interface LanIslandTreePalmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIslandTreePalmSolid: React.FC<LanIslandTreePalmSolidProps>;
export default LanIslandTreePalmSolid;
