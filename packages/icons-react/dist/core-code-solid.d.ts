import React from 'react';

export interface CoreCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCodeSolid: React.FC<CoreCodeSolidProps>;
export default CoreCodeSolid;
