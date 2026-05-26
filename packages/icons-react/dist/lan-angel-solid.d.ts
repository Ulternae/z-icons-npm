import React from 'react';

export interface LanAngelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngelSolid: React.FC<LanAngelSolidProps>;
export default LanAngelSolid;
