import React from 'react';

export interface NeoCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompassSolid: React.FC<NeoCompassSolidProps>;
export default NeoCompassSolid;
