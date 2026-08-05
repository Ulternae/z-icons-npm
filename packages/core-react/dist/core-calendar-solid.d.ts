import React from 'react';

export interface CoreCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarSolid(props: CoreCalendarSolidProps): React.ReactElement;
export default CoreCalendarSolid;
