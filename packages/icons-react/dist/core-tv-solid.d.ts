import React from 'react';

export interface CoreTvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTvSolid: React.FC<CoreTvSolidProps>;
export default CoreTvSolid;
