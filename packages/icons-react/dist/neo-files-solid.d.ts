import React from 'react';

export interface NeoFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilesSolid: React.FC<NeoFilesSolidProps>;
export default NeoFilesSolid;
