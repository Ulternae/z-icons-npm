import React from 'react';

export interface LanCalendarImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarImageRegular: React.FC<LanCalendarImageRegularProps>;
export default LanCalendarImageRegular;
