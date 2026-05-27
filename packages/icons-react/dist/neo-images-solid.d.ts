import React from 'react';

export interface NeoImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoImagesSolid: React.FC<NeoImagesSolidProps>;
export default NeoImagesSolid;
