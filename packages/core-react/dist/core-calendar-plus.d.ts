import React from 'react';

export interface CoreCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarPlus(props: CoreCalendarPlusProps): React.ReactElement;
export default CoreCalendarPlus;
