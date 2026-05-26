import React from 'react';

export interface LanGavelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGavel: React.FC<LanGavelProps>;
export default LanGavel;
