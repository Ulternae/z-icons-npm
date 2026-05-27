import React from 'react';

export interface CoreMagnifyingGlassPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMagnifyingGlassPlusSolid: React.FC<CoreMagnifyingGlassPlusSolidProps>;
export default CoreMagnifyingGlassPlusSolid;
