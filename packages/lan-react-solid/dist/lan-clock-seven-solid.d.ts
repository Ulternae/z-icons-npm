import React from 'react';

export interface LanClockSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSevenSolid(props: LanClockSevenSolidProps): React.ReactElement;
export default LanClockSevenSolid;
