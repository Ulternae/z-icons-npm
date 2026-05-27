import React from 'react';

export interface CoreBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoldSolid: React.FC<CoreBoldSolidProps>;
export default CoreBoldSolid;
