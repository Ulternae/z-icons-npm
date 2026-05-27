import React from 'react';

export interface NeoFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFishSolid: React.FC<NeoFishSolidProps>;
export default NeoFishSolid;
