import React from 'react';

export interface LanChessRookAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookAlt: React.FC<LanChessRookAltProps>;
export default LanChessRookAlt;
