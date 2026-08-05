import React from 'react';

export interface MinaCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarCheckSolid(props: MinaCalendarCheckSolidProps): React.ReactElement;
export default MinaCalendarCheckSolid;
