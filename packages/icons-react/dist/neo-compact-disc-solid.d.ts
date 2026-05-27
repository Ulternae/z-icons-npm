import React from 'react';

export interface NeoCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompactDiscSolid: React.FC<NeoCompactDiscSolidProps>;
export default NeoCompactDiscSolid;
