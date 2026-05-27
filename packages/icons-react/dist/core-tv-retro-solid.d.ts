import React from 'react';

export interface CoreTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTvRetroSolid: React.FC<CoreTvRetroSolidProps>;
export default CoreTvRetroSolid;
