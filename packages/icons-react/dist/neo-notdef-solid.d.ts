import React from 'react';

export interface NeoNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoNotdefSolid: React.FC<NeoNotdefSolidProps>;
export default NeoNotdefSolid;
