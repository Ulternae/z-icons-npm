import React from 'react';

export interface NeoMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMagnifyingGlassPlus: React.FC<NeoMagnifyingGlassPlusProps>;
export default NeoMagnifyingGlassPlus;
