import React from 'react';

export interface LanCalendarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarRegular: React.FC<LanCalendarRegularProps>;
export default LanCalendarRegular;
