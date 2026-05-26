import React from 'react';

export interface LanAntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnt: React.FC<LanAntProps>;
export default LanAnt;
