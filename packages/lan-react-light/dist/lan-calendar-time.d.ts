import React from 'react';

export interface LanCalendarTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTime(props: LanCalendarTimeProps): React.ReactElement;
export default LanCalendarTime;
