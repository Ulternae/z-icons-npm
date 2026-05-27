import React from 'react';

export interface CorePlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlaySolid: React.FC<CorePlaySolidProps>;
export default CorePlaySolid;
