import React from 'react';

export interface NeoLocationDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLocationDotSolid: React.FC<NeoLocationDotSolidProps>;
export default NeoLocationDotSolid;
