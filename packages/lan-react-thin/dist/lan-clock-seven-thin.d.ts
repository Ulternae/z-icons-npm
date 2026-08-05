import React from 'react';

export interface LanClockSevenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSevenThin(props: LanClockSevenThinProps): React.ReactElement;
export default LanClockSevenThin;
