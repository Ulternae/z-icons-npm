import React from 'react';

export interface NeoMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMagnifyingGlassSolid(props: NeoMagnifyingGlassSolidProps): React.ReactElement;
export default NeoMagnifyingGlassSolid;
