import React from 'react';

export interface CoreThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbsDownSolid: React.FC<CoreThumbsDownSolidProps>;
export default CoreThumbsDownSolid;
