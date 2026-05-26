import React from 'react';

export interface LanPumpkinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpkin: React.FC<LanPumpkinProps>;
export default LanPumpkin;
