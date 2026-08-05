import React from 'react';

export interface LanCalendarPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPen(props: LanCalendarPenProps): React.ReactElement;
export default LanCalendarPen;
