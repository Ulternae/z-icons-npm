import React from 'react';

export interface MinaCalendarXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarXSolid(props: MinaCalendarXSolidProps): React.ReactElement;
export default MinaCalendarXSolid;
