import React from 'react';

export interface LanCalendarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendars(props: LanCalendarsProps): React.ReactElement;
export default LanCalendars;
