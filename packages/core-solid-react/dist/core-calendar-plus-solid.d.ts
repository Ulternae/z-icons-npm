import React from 'react';

export interface CoreCalendarPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarPlusSolid(props: CoreCalendarPlusSolidProps): React.ReactElement;
export default CoreCalendarPlusSolid;
