import React from 'react';

export interface LanAeropressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAeropress: React.FC<LanAeropressProps>;
export default LanAeropress;
