import React from 'react';

export interface NeoDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDropletSolid: React.FC<NeoDropletSolidProps>;
export default NeoDropletSolid;
