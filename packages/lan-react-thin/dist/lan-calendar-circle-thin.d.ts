import React from 'react';

export interface LanCalendarCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleThin(props: LanCalendarCircleThinProps): React.ReactElement;
export default LanCalendarCircleThin;
