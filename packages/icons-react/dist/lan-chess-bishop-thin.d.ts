import React from 'react';

export interface LanChessBishopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishopThin: React.FC<LanChessBishopThinProps>;
export default LanChessBishopThin;
