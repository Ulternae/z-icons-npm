import React from 'react';

export interface NeoBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBarsSolid: React.FC<NeoBarsSolidProps>;
export default NeoBarsSolid;
