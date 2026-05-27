import React from 'react';

export interface CoreAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAtSolid: React.FC<CoreAtSolidProps>;
export default CoreAtSolid;
