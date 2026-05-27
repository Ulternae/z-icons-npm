import React from 'react';

export interface CoreBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBombSolid: React.FC<CoreBombSolidProps>;
export default CoreBombSolid;
