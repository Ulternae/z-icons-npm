import React from 'react';

export interface LanCalendarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendars: React.FC<LanCalendarsProps>;
export default LanCalendars;
