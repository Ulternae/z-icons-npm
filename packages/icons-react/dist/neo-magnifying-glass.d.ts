import React from 'react';

export interface NeoMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMagnifyingGlass: React.FC<NeoMagnifyingGlassProps>;
export default NeoMagnifyingGlass;
