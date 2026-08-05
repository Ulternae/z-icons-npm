import React from 'react';

export interface NeoMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMagnifyingGlassPlus(props: NeoMagnifyingGlassPlusProps): React.ReactElement;
export default NeoMagnifyingGlassPlus;
