import React from 'react';

export interface CoreMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMagnifyingGlassSolid: React.FC<CoreMagnifyingGlassSolidProps>;
export default CoreMagnifyingGlassSolid;
