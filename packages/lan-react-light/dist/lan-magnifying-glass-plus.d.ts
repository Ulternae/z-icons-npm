import React from 'react';

export interface LanMagnifyingGlassPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassPlus(props: LanMagnifyingGlassPlusProps): React.ReactElement;
export default LanMagnifyingGlassPlus;
