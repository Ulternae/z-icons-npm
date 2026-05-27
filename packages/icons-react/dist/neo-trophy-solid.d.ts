import React from 'react';

export interface NeoTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrophySolid: React.FC<NeoTrophySolidProps>;
export default NeoTrophySolid;
