import React from 'react';

export interface LanMicrochipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochip: React.FC<LanMicrochipProps>;
export default LanMicrochip;
