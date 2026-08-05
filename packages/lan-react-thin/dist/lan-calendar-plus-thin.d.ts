import React from 'react';

export interface LanCalendarPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPlusThin(props: LanCalendarPlusThinProps): React.ReactElement;
export default LanCalendarPlusThin;
