import React from 'react';

export interface NeoUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUsersSolid: React.FC<NeoUsersSolidProps>;
export default NeoUsersSolid;
