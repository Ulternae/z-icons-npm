import React from 'react';

export interface LanCalendarCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCirclePlusThin(props: LanCalendarCirclePlusThinProps): React.ReactElement;
export default LanCalendarCirclePlusThin;
