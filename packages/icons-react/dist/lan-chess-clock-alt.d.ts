import React from 'react';

export interface LanChessClockAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessClockAlt: React.FC<LanChessClockAltProps>;
export default LanChessClockAlt;
