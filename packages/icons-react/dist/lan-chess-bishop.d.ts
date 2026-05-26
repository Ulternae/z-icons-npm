import React from 'react';

export interface LanChessBishopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishop: React.FC<LanChessBishopProps>;
export default LanChessBishop;
