import React from 'react';

export interface LanCalendarHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarHeartThin(props: LanCalendarHeartThinProps): React.ReactElement;
export default LanCalendarHeartThin;
