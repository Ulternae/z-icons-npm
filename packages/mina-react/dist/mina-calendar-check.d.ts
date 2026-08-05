import React from 'react';

export interface MinaCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarCheck(props: MinaCalendarCheckProps): React.ReactElement;
export default MinaCalendarCheck;
