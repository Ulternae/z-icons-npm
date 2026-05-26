import React from 'react';

export interface LanChessBishopAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishopAltThin: React.FC<LanChessBishopAltThinProps>;
export default LanChessBishopAltThin;
