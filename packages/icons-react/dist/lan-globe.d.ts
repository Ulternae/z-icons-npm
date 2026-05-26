import React from 'react';

export interface LanGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobe: React.FC<LanGlobeProps>;
export default LanGlobe;
