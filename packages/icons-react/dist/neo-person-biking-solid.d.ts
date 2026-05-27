import React from 'react';

export interface NeoPersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPersonBikingSolid: React.FC<NeoPersonBikingSolidProps>;
export default NeoPersonBikingSolid;
