import React from 'react';

export interface LanChessClockAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClockAltThin(props: LanChessClockAltThinProps): React.ReactElement;
export default LanChessClockAltThin;
