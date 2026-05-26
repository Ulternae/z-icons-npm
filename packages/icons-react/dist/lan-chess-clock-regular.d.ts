import React from 'react';

export interface LanChessClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessClockRegular: React.FC<LanChessClockRegularProps>;
export default LanChessClockRegular;
