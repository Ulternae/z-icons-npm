import React from 'react';

export interface LanPipeValveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeValve: React.FC<LanPipeValveProps>;
export default LanPipeValve;
