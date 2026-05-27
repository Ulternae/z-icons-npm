import React from 'react';

export interface CoreFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFireSolid: React.FC<CoreFireSolidProps>;
export default CoreFireSolid;
