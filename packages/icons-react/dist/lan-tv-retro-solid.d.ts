import React from 'react';

export interface LanTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvRetroSolid: React.FC<LanTvRetroSolidProps>;
export default LanTvRetroSolid;
