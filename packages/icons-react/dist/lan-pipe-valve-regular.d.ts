import React from 'react';

export interface LanPipeValveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeValveRegular: React.FC<LanPipeValveRegularProps>;
export default LanPipeValveRegular;
