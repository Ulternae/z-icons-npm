import React from 'react';

export interface LanCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPlus(props: LanCalendarPlusProps): React.ReactElement;
export default LanCalendarPlus;
