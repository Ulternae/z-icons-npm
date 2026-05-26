import React from 'react';

export interface LanCalendarCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCheckRegular: React.FC<LanCalendarCheckRegularProps>;
export default LanCalendarCheckRegular;
