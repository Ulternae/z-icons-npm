import React from 'react';

export interface LanChessClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessClock: React.FC<LanChessClockProps>;
export default LanChessClock;
