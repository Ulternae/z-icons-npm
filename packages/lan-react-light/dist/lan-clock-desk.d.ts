import React from 'react';

export interface LanClockDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockDesk(props: LanClockDeskProps): React.ReactElement;
export default LanClockDesk;
