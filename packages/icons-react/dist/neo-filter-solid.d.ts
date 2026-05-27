import React from 'react';

export interface NeoFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilterSolid: React.FC<NeoFilterSolidProps>;
export default NeoFilterSolid;
