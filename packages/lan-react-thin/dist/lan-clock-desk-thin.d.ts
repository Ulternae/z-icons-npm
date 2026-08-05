import React from 'react';

export interface LanClockDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockDeskThin(props: LanClockDeskThinProps): React.ReactElement;
export default LanClockDeskThin;
