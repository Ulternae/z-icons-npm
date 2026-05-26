import React from 'react';

export interface LanChessRookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookThin: React.FC<LanChessRookThinProps>;
export default LanChessRookThin;
