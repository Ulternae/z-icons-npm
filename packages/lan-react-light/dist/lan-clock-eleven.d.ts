import React from 'react';

export interface LanClockElevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockEleven(props: LanClockElevenProps): React.ReactElement;
export default LanClockEleven;
