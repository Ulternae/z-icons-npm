import React from 'react';

export interface LanMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassSolid(props: LanMagnifyingGlassSolidProps): React.ReactElement;
export default LanMagnifyingGlassSolid;
