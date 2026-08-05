import React from 'react';

export interface LanCalendarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarThin(props: LanCalendarThinProps): React.ReactElement;
export default LanCalendarThin;
