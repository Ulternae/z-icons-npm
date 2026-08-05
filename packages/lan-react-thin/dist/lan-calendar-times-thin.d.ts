import React from 'react';

export interface LanCalendarTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimesThin(props: LanCalendarTimesThinProps): React.ReactElement;
export default LanCalendarTimesThin;
