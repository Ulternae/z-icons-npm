import React from 'react';

export interface NeoFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFireSolid: React.FC<NeoFireSolidProps>;
export default NeoFireSolid;
