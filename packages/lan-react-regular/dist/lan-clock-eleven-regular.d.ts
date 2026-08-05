import React from 'react';

export interface LanClockElevenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockElevenRegular(props: LanClockElevenRegularProps): React.ReactElement;
export default LanClockElevenRegular;
