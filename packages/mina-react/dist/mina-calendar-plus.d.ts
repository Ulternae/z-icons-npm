import React from 'react';

export interface MinaCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarPlus(props: MinaCalendarPlusProps): React.ReactElement;
export default MinaCalendarPlus;
