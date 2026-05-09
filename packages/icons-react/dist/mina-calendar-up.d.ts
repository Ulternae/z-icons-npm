import React from 'react';

export interface MinaCalendarUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarUp: React.FC<MinaCalendarUpProps>;
export default MinaCalendarUp;
