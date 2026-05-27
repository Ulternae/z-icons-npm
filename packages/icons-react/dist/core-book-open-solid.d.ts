import React from 'react';

export interface CoreBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookOpenSolid: React.FC<CoreBookOpenSolidProps>;
export default CoreBookOpenSolid;
