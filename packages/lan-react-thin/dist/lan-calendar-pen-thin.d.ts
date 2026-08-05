import React from 'react';

export interface LanCalendarPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPenThin(props: LanCalendarPenThinProps): React.ReactElement;
export default LanCalendarPenThin;
