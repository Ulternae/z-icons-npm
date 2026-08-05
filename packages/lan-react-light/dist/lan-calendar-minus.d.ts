import React from 'react';

export interface LanCalendarMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarMinus(props: LanCalendarMinusProps): React.ReactElement;
export default LanCalendarMinus;
