import React from 'react';

export interface LanCalendarCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCheckThin(props: LanCalendarCheckThinProps): React.ReactElement;
export default LanCalendarCheckThin;
