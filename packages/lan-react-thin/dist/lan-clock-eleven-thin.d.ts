import React from 'react';

export interface LanClockElevenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockElevenThin(props: LanClockElevenThinProps): React.ReactElement;
export default LanClockElevenThin;
