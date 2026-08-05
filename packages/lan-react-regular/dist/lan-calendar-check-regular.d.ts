import React from 'react';

export interface LanCalendarCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCheckRegular(props: LanCalendarCheckRegularProps): React.ReactElement;
export default LanCalendarCheckRegular;
