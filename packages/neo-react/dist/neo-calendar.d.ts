import React from 'react';

export interface NeoCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCalendar(props: NeoCalendarProps): React.ReactElement;
export default NeoCalendar;
