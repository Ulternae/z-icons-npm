import React from 'react';

export interface LanChessRookAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookAltThin: React.FC<LanChessRookAltThinProps>;
export default LanChessRookAltThin;
