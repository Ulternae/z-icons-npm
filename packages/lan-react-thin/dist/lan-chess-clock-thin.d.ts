import React from 'react';

export interface LanChessClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClockThin(props: LanChessClockThinProps): React.ReactElement;
export default LanChessClockThin;
