import React from 'react';

export interface NeoCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCartShoppingSolid: React.FC<NeoCartShoppingSolidProps>;
export default NeoCartShoppingSolid;
