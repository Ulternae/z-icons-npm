import React from 'react';

export interface LanClockTwelveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwelveThin(props: LanClockTwelveThinProps): React.ReactElement;
export default LanClockTwelveThin;
