import React from 'react';

export interface MinaAlarmPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmPlusSolid(props: MinaAlarmPlusSolidProps): React.ReactElement;
export default MinaAlarmPlusSolid;
