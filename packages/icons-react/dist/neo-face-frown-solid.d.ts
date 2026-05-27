import React from 'react';

export interface NeoFaceFrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceFrownSolid: React.FC<NeoFaceFrownSolidProps>;
export default NeoFaceFrownSolid;
