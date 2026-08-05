import React from 'react';

export interface CoreCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarCheckSolid(props: CoreCalendarCheckSolidProps): React.ReactElement;
export default CoreCalendarCheckSolid;
