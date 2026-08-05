import React from 'react';

export interface LanCalendarMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarMinusThin(props: LanCalendarMinusThinProps): React.ReactElement;
export default LanCalendarMinusThin;
