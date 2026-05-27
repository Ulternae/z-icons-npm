import React from 'react';

export interface CoreTvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTv: React.FC<CoreTvProps>;
export default CoreTv;
