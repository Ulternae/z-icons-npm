import React from 'react';

export interface LanChessClockAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClockAlt(props: LanChessClockAltProps): React.ReactElement;
export default LanChessClockAlt;
