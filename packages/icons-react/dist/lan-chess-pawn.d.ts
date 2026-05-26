import React from 'react';

export interface LanChessPawnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawn: React.FC<LanChessPawnProps>;
export default LanChessPawn;
