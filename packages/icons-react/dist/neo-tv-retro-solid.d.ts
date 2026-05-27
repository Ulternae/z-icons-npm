import React from 'react';

export interface NeoTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTvRetroSolid: React.FC<NeoTvRetroSolidProps>;
export default NeoTvRetroSolid;
