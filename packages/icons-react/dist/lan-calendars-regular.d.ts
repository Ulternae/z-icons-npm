import React from 'react';

export interface LanCalendarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarsRegular: React.FC<LanCalendarsRegularProps>;
export default LanCalendarsRegular;
