import React from 'react';

export interface LanBoxMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxMagnifyingGlassSolid: React.FC<LanBoxMagnifyingGlassSolidProps>;
export default LanBoxMagnifyingGlassSolid;
