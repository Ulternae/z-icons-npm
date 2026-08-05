import React from 'react';

export interface LanCalendarImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarImageRegular(props: LanCalendarImageRegularProps): React.ReactElement;
export default LanCalendarImageRegular;
