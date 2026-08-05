import React from 'react';

export interface LanCalendarPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPlusRegular(props: LanCalendarPlusRegularProps): React.ReactElement;
export default LanCalendarPlusRegular;
