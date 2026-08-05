import React from 'react';

export interface LanCalendarPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPenRegular(props: LanCalendarPenRegularProps): React.ReactElement;
export default LanCalendarPenRegular;
