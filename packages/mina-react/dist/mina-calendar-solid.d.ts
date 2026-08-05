import React from 'react';

export interface MinaCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarSolid(props: MinaCalendarSolidProps): React.ReactElement;
export default MinaCalendarSolid;
