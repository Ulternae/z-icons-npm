import React from 'react';

export interface LanMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassSolid: React.FC<LanMagnifyingGlassSolidProps>;
export default LanMagnifyingGlassSolid;
