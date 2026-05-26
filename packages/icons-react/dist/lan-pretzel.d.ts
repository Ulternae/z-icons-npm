import React from 'react';

export interface LanPretzelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPretzel: React.FC<LanPretzelProps>;
export default LanPretzel;
