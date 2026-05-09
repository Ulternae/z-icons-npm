import React from 'react';

export interface MinaAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersandSolid: React.FC<MinaAmpersandSolidProps>;
export default MinaAmpersandSolid;
