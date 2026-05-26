import React from 'react';

export interface LanChessBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBoardThin: React.FC<LanChessBoardThinProps>;
export default LanChessBoardThin;
