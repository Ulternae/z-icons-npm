import React from 'react';

export interface CoreCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompactDiscSolid: React.FC<CoreCompactDiscSolidProps>;
export default CoreCompactDiscSolid;
