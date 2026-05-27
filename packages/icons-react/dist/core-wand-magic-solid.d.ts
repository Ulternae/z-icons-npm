import React from 'react';

export interface CoreWandMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWandMagicSolid: React.FC<CoreWandMagicSolidProps>;
export default CoreWandMagicSolid;
