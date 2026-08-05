import React from 'react';

export interface LanCalendarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarsThin(props: LanCalendarsThinProps): React.ReactElement;
export default LanCalendarsThin;
