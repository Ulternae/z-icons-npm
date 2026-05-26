import React from 'react';

export interface LanTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvRetro: React.FC<LanTvRetroProps>;
export default LanTvRetro;
