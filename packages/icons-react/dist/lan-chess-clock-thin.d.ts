import React from 'react';

export interface LanChessClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessClockThin: React.FC<LanChessClockThinProps>;
export default LanChessClockThin;
