import React from 'react';

export interface LanPeapodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeapod: React.FC<LanPeapodProps>;
export default LanPeapod;
