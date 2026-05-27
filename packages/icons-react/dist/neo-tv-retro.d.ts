import React from 'react';

export interface NeoTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTvRetro: React.FC<NeoTvRetroProps>;
export default NeoTvRetro;
