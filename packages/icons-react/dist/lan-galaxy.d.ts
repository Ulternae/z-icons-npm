import React from 'react';

export interface LanGalaxyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalaxy: React.FC<LanGalaxyProps>;
export default LanGalaxy;
