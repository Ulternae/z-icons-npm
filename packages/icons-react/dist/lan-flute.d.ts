import React from 'react';

export interface LanFluteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlute: React.FC<LanFluteProps>;
export default LanFlute;
