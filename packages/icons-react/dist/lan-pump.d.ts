import React from 'react';

export interface LanPumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPump: React.FC<LanPumpProps>;
export default LanPump;
