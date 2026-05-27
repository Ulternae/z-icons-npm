import React from 'react';

export interface NeoXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoXmarkSolid: React.FC<NeoXmarkSolidProps>;
export default NeoXmarkSolid;
