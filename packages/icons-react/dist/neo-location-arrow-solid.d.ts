import React from 'react';

export interface NeoLocationArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLocationArrowSolid: React.FC<NeoLocationArrowSolidProps>;
export default NeoLocationArrowSolid;
