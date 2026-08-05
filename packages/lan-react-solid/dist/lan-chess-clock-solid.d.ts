import React from 'react';

export interface LanChessClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClockSolid(props: LanChessClockSolidProps): React.ReactElement;
export default LanChessClockSolid;
