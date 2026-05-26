import React from 'react';

export interface LanPedestalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPedestal: React.FC<LanPedestalProps>;
export default LanPedestal;
