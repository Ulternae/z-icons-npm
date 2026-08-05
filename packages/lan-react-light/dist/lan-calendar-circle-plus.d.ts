import React from 'react';

export interface LanCalendarCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCirclePlus(props: LanCalendarCirclePlusProps): React.ReactElement;
export default LanCalendarCirclePlus;
