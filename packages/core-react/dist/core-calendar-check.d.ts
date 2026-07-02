import React from 'react';

export interface CoreCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarCheck(props: CoreCalendarCheckProps): React.ReactElement;
export default CoreCalendarCheck;
