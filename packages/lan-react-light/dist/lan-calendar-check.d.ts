import React from 'react';

export interface LanCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCheck(props: LanCalendarCheckProps): React.ReactElement;
export default LanCalendarCheck;
