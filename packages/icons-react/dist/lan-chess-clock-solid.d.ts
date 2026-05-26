import React from 'react';

export interface LanChessClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessClockSolid: React.FC<LanChessClockSolidProps>;
export default LanChessClockSolid;
