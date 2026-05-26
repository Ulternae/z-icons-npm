import React from 'react';

export interface LanSirenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSiren: React.FC<LanSirenProps>;
export default LanSiren;
