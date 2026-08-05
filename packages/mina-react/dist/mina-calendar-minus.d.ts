import React from 'react';

export interface MinaCalendarMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarMinus(props: MinaCalendarMinusProps): React.ReactElement;
export default MinaCalendarMinus;
