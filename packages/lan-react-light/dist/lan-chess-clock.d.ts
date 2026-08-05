import React from 'react';

export interface LanChessClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClock(props: LanChessClockProps): React.ReactElement;
export default LanChessClock;
