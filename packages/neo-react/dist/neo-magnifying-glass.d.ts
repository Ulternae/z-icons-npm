import React from 'react';

export interface NeoMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMagnifyingGlass(props: NeoMagnifyingGlassProps): React.ReactElement;
export default NeoMagnifyingGlass;
