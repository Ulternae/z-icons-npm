import React from 'react';

export interface LanCalendarStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarStarRegular(props: LanCalendarStarRegularProps): React.ReactElement;
export default LanCalendarStarRegular;
