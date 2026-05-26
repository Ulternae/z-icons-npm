import React from 'react';

export interface LanChessBishopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishopRegular: React.FC<LanChessBishopRegularProps>;
export default LanChessBishopRegular;
