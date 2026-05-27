import React from 'react';

export interface NeoBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookSolid: React.FC<NeoBookSolidProps>;
export default NeoBookSolid;
