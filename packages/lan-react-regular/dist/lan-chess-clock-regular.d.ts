import React from 'react';

export interface LanChessClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessClockRegular(props: LanChessClockRegularProps): React.ReactElement;
export default LanChessClockRegular;
