import React from 'react';

export interface LanChessBishopAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishopAlt: React.FC<LanChessBishopAltProps>;
export default LanChessBishopAlt;
