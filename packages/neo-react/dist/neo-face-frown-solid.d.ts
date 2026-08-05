import React from 'react';

export interface NeoFaceFrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceFrownSolid(props: NeoFaceFrownSolidProps): React.ReactElement;
export default NeoFaceFrownSolid;
