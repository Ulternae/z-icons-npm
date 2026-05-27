import React from 'react';

export interface NeoCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCodeSolid: React.FC<NeoCodeSolidProps>;
export default NeoCodeSolid;
