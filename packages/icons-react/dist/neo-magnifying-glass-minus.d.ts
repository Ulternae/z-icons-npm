import React from 'react';

export interface NeoMagnifyingGlassMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMagnifyingGlassMinus: React.FC<NeoMagnifyingGlassMinusProps>;
export default NeoMagnifyingGlassMinus;
