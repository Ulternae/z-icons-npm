import React from 'react';

export interface LanBoxMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxMagnifyingGlassSolid(props: LanBoxMagnifyingGlassSolidProps): React.ReactElement;
export default LanBoxMagnifyingGlassSolid;
