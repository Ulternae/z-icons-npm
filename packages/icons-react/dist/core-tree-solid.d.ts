import React from 'react';

export interface CoreTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTreeSolid: React.FC<CoreTreeSolidProps>;
export default CoreTreeSolid;
