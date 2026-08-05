import React from 'react';

export interface LanCalendarTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimeThin(props: LanCalendarTimeThinProps): React.ReactElement;
export default LanCalendarTimeThin;
