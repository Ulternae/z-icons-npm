import React from 'react';

export interface MinaCalendarPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarPlusSolid(props: MinaCalendarPlusSolidProps): React.ReactElement;
export default MinaCalendarPlusSolid;
