import React from 'react';

export interface MinaCalendarXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarX(props: MinaCalendarXProps): React.ReactElement;
export default MinaCalendarX;
