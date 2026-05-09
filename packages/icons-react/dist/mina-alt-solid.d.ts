import React from 'react';

export interface MinaAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAltSolid: React.FC<MinaAltSolidProps>;
export default MinaAltSolid;
