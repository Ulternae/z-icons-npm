import React from 'react';

export interface CoreCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendar(props: CoreCalendarProps): React.ReactElement;
export default CoreCalendar;
