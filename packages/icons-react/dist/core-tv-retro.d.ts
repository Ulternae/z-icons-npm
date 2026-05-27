import React from 'react';

export interface CoreTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTvRetro: React.FC<CoreTvRetroProps>;
export default CoreTvRetro;
