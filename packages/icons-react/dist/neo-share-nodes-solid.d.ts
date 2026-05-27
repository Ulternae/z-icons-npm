import React from 'react';

export interface NeoShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShareNodesSolid: React.FC<NeoShareNodesSolidProps>;
export default NeoShareNodesSolid;
