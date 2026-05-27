import React from 'react';

export interface CoreThumbsUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbsUpSolid: React.FC<CoreThumbsUpSolidProps>;
export default CoreThumbsUpSolid;
