import React from 'react';

export interface MinaCalendarDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarDown(props: MinaCalendarDownProps): React.ReactElement;
export default MinaCalendarDown;
