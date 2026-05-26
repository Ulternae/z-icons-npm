import React from 'react';

export interface LanRamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRam: React.FC<LanRamProps>;
export default LanRam;
